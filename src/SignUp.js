import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import config from './config';
import { handleErrors, showError } from './helpers';
import { useAlert } from 'react-alert';
import { ReCaptcha } from 'react-recaptcha-google'
const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const SignUpInner = (props) =>
{
  const classes = useStyles();
  const alert = useAlert();
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate action="/" method="POST" onSubmit={(e) =>
        {
          e.preventDefault();
          if (props.token !== '')
          {
            let fbody = {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Token': props.token
              },
              body: JSON.stringify({
                username: e.target.firstName.value + " " + e.target.lastName.value,
                email: e.target.email.value,
                password: e.target.password.value,
              })
            }
            fetch(config.signupurl, fbody)
              .then(handleErrors)
              .then(() =>
              {
                window.location.href = "/registered";
              })
              .catch(err => showError(err))
              .then(resolvederror =>
                {
                  if (typeof resolvederror ==='string')
                  alert.show(resolvederror)
                  else{
                alert.show(JSON.stringify(resolvederror))
                  }
              })
          }
          else{
            alert.show("Solve CAPTCHA")
          }
        }
        }>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
export default class MenuAppBar extends Component
{
  constructor(props, context)
  {
    super(props, context);
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.state = {
      token: ''
    };
  }
  componentDidMount ()
  {
    if (this.captchaDemo)
    {
      this.captchaDemo.reset();
    }
  }
  onLoadRecaptcha ()
  {
    if (this.captchaDemo)
    {
      this.captchaDemo.reset();
    }
  }
  verifyCallback (recaptchaToken)
  {
    this.setState({ token: recaptchaToken })
  }
  render ()
  {
    const { token } = this.state;
    return (
      <div><SignUpInner token={token}
      />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <ReCaptcha
            ref={(el) => { this.captchaDemo = el; }}
            size="normal"
            data-theme="dark"
            render="explicit"
            sitekey={config.sitekey}
            onloadCallback={this.onLoadRecaptcha}
            verifyCallback={this.verifyCallback}
          />
        </div>
      </div>
    )
  }
}
