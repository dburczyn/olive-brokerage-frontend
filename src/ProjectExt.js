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
import Opakowywarka from './Opakowywarka';
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
    <Container component="main" maxWidth="lg">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={config.serverurl + (typeof props.data.picture !== 'undefined'
                  ? props.data.picture.url
                  : '')}
                title="Job Pic" />
            </CardActionArea>
          </Grid>
          <Grid item xs={9}>
            <Typography component="h1" variant="h4">
              {props.data.name}
            </Typography>
            <Typography component="h5" variant="h6">
              Affiliation: {props.data.affiliation}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <MenuList>
                <Fragment key={Math.random()}>
                  {
                    (typeof props.data.description !== 'undefined') ? (<Link underline="none" color="inherit" className={classes.link} component={RouterLink} to={"/" + props.type + "/" + encodeURIComponent(props.url) + "/" + props.ep + "/" + props.id}>
                      <MenuItem> Home</MenuItem>
                    </Link>) : null
                  }
                </Fragment>
                {
                  (typeof props.data.textmenus !== 'undefined' && props.data.textmenus.length > 0) ?
                    (
                      props.data.textmenus.map(hit =>
                      {
                        const route = "/" + props.type + "/" + encodeURIComponent(props.url) + "/" + props.ep + "/" + props.id + "/textmenu/" + hit.id;
                        return <Fragment key={hit.created_at}>
                          {
                            (hit.id > 0 && hit.visible === 1) ? (<Link underline="none" color="inherit" className={classes.link} component={RouterLink} to={route}>
                              <MenuItem> {hit.name}</MenuItem>
                            </Link>) : null
                          }
                        </Fragment>;
                      }
                      )
                    )
                    : null
                }
                {
                  (typeof props.data.filemenus !== 'undefined' && props.data.filemenus.length > 0) ? (
                    props.data.filemenus.map(hit =>
                    {
                      const route = "/" + props.type + "/" + encodeURIComponent(props.url) + "/" + props.ep + "/" + props.id + "/filemenu/" + hit.id;
                      return <Fragment key={hit.created_at}>
                        {
                          (hit.id > 0 && hit.visible === 1) ? (<Link underline="none" color="inherit" className={classes.link} component={RouterLink} to={route}>
                            <MenuItem> {hit.name}</MenuItem>
                          </Link>) : null
                        }
                      </Fragment>;
                    }
                    )
                  ) : null
                }
              </MenuList>
            </Paper>
          </Grid>
          <Grid item xs={9}>


          <Opakowywarka key={Math.random()}  test={props}/>



          </Grid>
        </Grid>
      </div>
      <Box mt={5}>
        <Back />
      </Box>
    </Container>
  );
}
