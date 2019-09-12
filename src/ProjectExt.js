import React, { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import config from './config';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Back from './Back';
import MenuItemRouter from './MenuItemRouter';
const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
      fontfamily: 'Times New Roman'
    }
  },
  root: {
    flexGrow: 1,
    padding: 20,
  },
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  media: {
    height: 150
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
  },
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));
export default function ProjectExt (props)
{
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xl">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={(typeof props.data.picture !== 'undefined' ? config.serverurl + props.data.picture.url : props.data.AlternatePictureUrl)}
                title="Job Pic" />
            </CardActionArea>
          </Grid>
          <Grid item xs={10}>
            <Typography component="h1" variant="h4">
              {props.data.name}
            </Typography>
            <Typography component="h5" variant="h6">
              Affiliation: {props.data.affiliation}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <Paper className={classes.paper}>
              <MenuList>
                <Fragment key={Math.random()}>
                  {
                    (typeof props.data.description !== 'undefined') ? (<Link underline="none" color="inherit" className={classes.link} component={RouterLink} to={"/" + props.type + "/" + encodeURIComponent(props.url) + "/" + props.ep + "/" + props.id}>
                      <MenuItem style={{whiteSpace: 'normal'}}> Home</MenuItem>
                    </Link>) : null
                  }
                </Fragment>
                {
                  (Object.keys(props.data).length > 0) ?
                    (
                      Object.keys(props.data).map(hit =>
                      {
                        if (Array.isArray(props.data[hit]))
                        {
                          return (
                            props.data[hit].map(hit2 =>
                            {
                              const route = "/" + props.type + "/" + encodeURIComponent(props.url) + "/" + props.ep + "/" + props.id + "/" + hit + "/" + hit2.name;
                              return <Fragment key={hit2.created_at}>
                                {
                                  <Link underline="none" color="inherit" className={classes.link} component={RouterLink} to={route}>
                                    <MenuItem style={{whiteSpace: 'normal'}}> {
                                      (typeof hit2.name !== 'undefined') ? (hit2.name) : (hit2.id)
                                    }</MenuItem>
                                  </Link>
                                }
                              </Fragment>;
                            }
                            )
                          )
                        }
                        return null
                      }
                      )
                    )
                    : null
                }
              </MenuList>
            </Paper>
          </Grid>
          <Grid item xs={10}>
            <MenuItemRouter key={Math.random()} projectwithmenus={props} />
          </Grid>
        </Grid>
      </div>
      <Box mt={5}>
        <Back />
      </Box>
    </Container>
  );
}
