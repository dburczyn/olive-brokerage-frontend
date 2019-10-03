import React from 'react';
import config from './config';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import Back from './Back';
import Fab from '@material-ui/core/Fab';
import Mail from '@material-ui/icons/Mail';
var showdown = require('showdown');
showdown.setOption('strikethrough', 'true');
showdown.setOption('simpleLineBreaks', 'true');
showdown.setOption('simplifiedAutoLink', 'true');
showdown.setOption('parseImgDimensions', 'true');
showdown.setOption('tables', 'true');
showdown.setOption('tasklists', 'true');
showdown.setOption('ghCodeBlocks', 'true');
var converter = new showdown.Converter();
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
export default function TrainingExt (props)
{
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="lg">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={(typeof props.data.picture !== 'undefined' ? config.serverurl + props.data.picture.url : props.data.AlternatePictureUrl)}
                title="Training Pic" />
            </CardActionArea>
          </Grid>

        </Grid>
        <Grid container spacing={3}>
        <Grid item xs={12}>
            <Typography component="h1" variant="h4">
              {props.data.name}
            </Typography>
            <Typography component="h5" variant="h6">
            Date: {new Date(props.data.date).toUTCString()}
            </Typography>
          </Grid>
          </Grid>
        <Grid container spacing={3}>
        <Grid item xs={12}>
        <Typography component={'span'} variant={'body2'}>
            <div
                dangerouslySetInnerHTML={{
                    __html: converter.makeHtml(props.data.description)
                }}></div>
        </Typography>
          </Grid>
          </Grid>
          <Grid container spacing={3}>
        <Grid item xs={12}>
        <Typography component="h5" variant="h6">
        Last update: {new Date(props.data.updated_at).toUTCString()}
            </Typography>
            <Typography component="h5" variant="h6">
              Created: {new Date(props.data.created_at).toUTCString()}
            </Typography>
          </Grid>
          </Grid>
          <Grid container spacing={3}>
        <Grid item xs={12}>
        <Fab variant="extended" aria-label="delete" className={classes.fab}>
                    <Mail className={classes.extendedIcon} />
                    <a
                        style={{
                            color: 'black',
                            'textDecoration': 'none'
                        }}
                        href={"mailto:" + props.data.email}>Apply</a>
                </Fab>
          </Grid>
          </Grid>


      </div>
      <Box mt={5}>
        <Back />
      </Box>
    </Container>
  );
}
