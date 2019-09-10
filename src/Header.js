import React, { Fragment, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { handleErrors, showError } from './helpers';
import config from './config';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
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
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    padding: 10,
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
          <Toolbar>
            <img
              style={config.styles.headerimgstyle}
              src={config.styles.headerimg}
              alt="background"
            />
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
                    (grid.visible === true || 1) ?
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
              <Link underline="none" color="inherit" className={classes.link} component={RouterLink} to="/signin">
                <Typography style={config.styles.headerlinkstyle}>Sign In </Typography>
              </Link>
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
                  <AccountCircle />
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
                  <MenuItem >{localStorage.getItem('user')}</MenuItem>
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
