import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import config from './config';
import { handleErrors, showError } from './helpers';
import { useAlert } from 'react-alert';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white
        }
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

export default function ChangePassword ()
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
                    Enter New Password
                </Typography>
                <form
                    className={classes.form}
                    noValidate
                    action="/"
                    method="POST"
                    onSubmit={(e) =>
                    {
                        e.preventDefault();
                        let url = new URL(window.location.href);
                        let code = url
                            .searchParams
                            .get("code");
                        let fbody = {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ 'code': code, 'password': e.target.password.value, 'passwordConfirmation': e.target.confirmpassword.value })
                        }
                        fetch(config.resetpasswordurlsubmit, fbody)
                            .then(handleErrors)
                            .then(response => response.json())
                            .then(data =>
                            {
                                if (data.jwt && data.user)
                                {
                                    window.location.href = "/changed";
                                }
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
                    }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password" />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="confirmpassword"
                        label="Confirm Password"
                        type="password"
                        id="confirmpassword"
                        autoComplete="current-password" />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}>
                        Change
                    </Button>
                </form>
            </div>
        </Container>
    );
}