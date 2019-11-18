import React, { Fragment, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { handleErrors, showError } from './helpers';
import config from './config';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
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
    <Slide appear={false} direction="down" in={!trigger}>
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
  menuButton: {
    display: 'flex'
  },
  title: {
    flexGrow: 1,
  },
  link: {
    padding: '10px'
  },
  plink: {
    flex: '1',
    padding: '10px',
    paddingRight: '20px'
  },
  appbar: {
    overflowX: "auto",
  },
}));
const MenuAppBarInner = (props) =>
{
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  function handleLogout (event)
  {
    localStorage.setItem('token', null);
    localStorage.setItem('user', null);
    setAnchorEl(null);
    window.location.href = "/";
  }
  function handleMenu (event)
  {
    setAnchorEl(event.currentTarget);
  }
  function handleClose ()
  {
    setAnchorEl(null);
  }
  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar className={classes.appbar} style={config.styles.header}>
          <Toolbar style={config.styles.toolbarup}>
            <img style={config.styles.headerimgstyle} src={config.styles.headerimg} alt="background" />
            <Typography component={'span'} style={config.styles.headertextstyle}>   <div
              dangerouslySetInnerHTML={{
                __html: converter.makeHtml(config.styles.headertext) || ''
              }}></div></Typography>
          </Toolbar>
          <Toolbar style={config.styles.toolbardown}>
            {
              (props.htmlpages.length > 0) ? (
                props.htmlpages.map(htmlpage => <Fragment key={htmlpage.created_at}>
                  {(htmlpage.visible === (true || 1)) ?
                    (<Link underline="none" color="inherit" className={classes.link} component={RouterLink} to={"/html/" + htmlpage.name}>
                      <Typography style={config.styles.headerlinkstyle}>   {htmlpage.name} </Typography>
                    </Link>) : null
                  }
                </Fragment>)
              ) : null
            }
            {
              (props.grids.length > 0) ? (
                props.grids.map(grid => <Fragment key={grid.created_at}>
                  {
                    (grid.visible === (true || 1)) ?
                      (<Link underline="none" color="inherit" className={classes.link} component={RouterLink} to={{ pathname: "/grid/" + grid.name }}
                      >
                        <Typography style={config.styles.headerlinkstyle}>{grid.name} </Typography>
                      </Link>) : null
                  }
                </Fragment>)
              ) : null
            }
            <Typography variant="h6" className={classes.title}>
            </Typography>
            {(localStorage.getItem('token') == null || localStorage.getItem('token') === "null") && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <Typography style={config.styles.headerlinkstyle}>Not logged in<ArrowDropDown fontSize='small' />
                  </Typography>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem className={classes.menuButton} onClick={handleClose} >      <Link underline="none" color="inherit" className={classes.plink} component={RouterLink} to="/signin">
                    <Typography style={config.styles.headerpopupstyle}>Log In </Typography>
                  </Link></MenuItem>
                  <MenuItem className={classes.menuButton} onClick={handleClose}><Link underline="none" color="inherit" className={classes.plink} component={RouterLink} to="/signup">
                    <Typography style={config.styles.headerpopupstyle}>Register</Typography>
                  </Link></MenuItem>
                  <MenuItem className={classes.menuButton} onClick={handleClose}><Link underline="none" color="inherit" className={classes.plink} component={RouterLink} to="/forgotpassword">
                    <Typography style={config.styles.headerpopupstyle}>Forgot Password</Typography>
                  </Link></MenuItem>
                </Menu>
              </div>
            )}
            {localStorage.getItem('token') != null && localStorage.getItem('token') !== "null" && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <Typography style={config.styles.headerlinkstyle}>{localStorage.getItem('user')}<ArrowDropDown fontSize='small' />
                  </Typography>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}
export default class MenuAppBar extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      htmlpages: [],
      grids: [],
      handlergrids: props.handlergrids,
      handlerhtml: props.handlerhtml
    };
  }
  componentDidMount ()
  {
    let fbody = {};
    if (localStorage.getItem('token') != null && localStorage.getItem('token') !== "null")
    {
      fbody.headers = {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      };
    }
    fetch(config.htmlurl, fbody)
      .then(handleErrors)
      .then(response => response.json())
      .then(htmlpages =>
      {
        this.setState({ htmlpages: htmlpages })
        this.state.handlerhtml(htmlpages)
      })
      .catch(err => showError(err))
    fetch(config.gridurl, fbody)
      .then(handleErrors)
      .then(response => response.json())
      .then(grids =>
      {
        this.setState({ grids: grids })
        this.state.handlergrids(grids)
      })
      .catch(err => showError(err))
  }
  render ()
  {
    const { htmlpages, grids } = this.state;
    return (
      <div><MenuAppBarInner
        htmlpages={htmlpages}
        grids={grids}
      /></div>
    )
  }
}
