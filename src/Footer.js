import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import config from './config';
var showdown = require('showdown');
showdown.setOption('strikethrough', 'true');
showdown.setOption('simpleLineBreaks', 'true');
showdown.setOption('simplifiedAutoLink', 'true');
showdown.setOption('parseImgDimensions', 'true');
showdown.setOption('tables', 'true');
showdown.setOption('tasklists', 'true');
showdown.setOption('ghCodeBlocks', 'true');
var converter = new showdown.Converter();
function HideOnScroll (props)
{
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="up" in={!trigger}>
      {children}
    </Slide>
  );
}
HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    // overflowX: "auto",
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  title: {
    flexGrow: 1,
  },
}));
export default function Footer (props)
{
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar color="primary" className={classes.appBar} style={config.styles.footer}>
          <Toolbar>
            <img
              style={config.styles.footerimgstyle}
              src={config.styles.footerimgleft}
              alt="background"
            />
            <Typography style={config.styles.footertextstyle} className={classes.title}>
            </Typography>
            <Typography component={'span'} style={config.styles.footertextstyle}>   <div
              dangerouslySetInnerHTML={{
                __html: converter.makeHtml(config.styles.footertext1) || ''
              }}></div></Typography>
            <Typography style={config.styles.footertextstyle} className={classes.title}>
            </Typography>
            <Typography component={'span'} style={config.styles.footertextstyle}>   <div
              dangerouslySetInnerHTML={{
                __html: converter.makeHtml(config.styles.footertext2) || ''
              }}></div></Typography>
            <Typography style={config.styles.footertextstyle} className={classes.title}>
            </Typography>
            <Typography component={'span'} style={config.styles.footertextstyle}>   <div
              dangerouslySetInnerHTML={{
                __html: converter.makeHtml(config.styles.footertext3) || ''
              }}></div></Typography>
            <Typography style={config.styles.footertextstyle} className={classes.title}>
            </Typography>
            <Typography style={config.styles.footertextstyle}>{""}</Typography>
            <img
              style={config.styles.footerimgstyle}
              src={config.styles.footerimgright}
              alt="background"
            />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  )
}