import React, { Fragment, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { handleErrors, showError } from './helpers';
import config from './config';

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
  appBar: {
    zIndex: 1201,
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
      {/* <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          {
            (props.htmlpages.length > 0) ? (
              props.htmlpages.map(hit => <Fragment key={hit.created_at}>
                {(hit.id > 0) ?
                  (<Link color="inherit" className={classes.link} component={RouterLink} to={"/html/" + hit.id}>
                    {hit.name}
                  </Link>) : null
                }
              </Fragment>)

            ) : null
          }

{
            (props.grids.length > 0) ? (

              props.grids.map(hit =><Fragment key={hit.created_at}>
                {

                  (hit.id > 0) ?
                  (<Link color="inherit" className={classes.link} component={RouterLink} to={{pathname: "/grid/" + hit.urlname, state: { grid: hit} }}
                  >

                    {hit.name}
                  </Link>) : null
                }
              </Fragment>)

            ) : null
          }




          <Typography variant="h6" className={classes.title}>
          </Typography>

          {(localStorage.getItem('token') == null || localStorage.getItem('token') === "null") && (
            <Link color="inherit" className={classes.link} component={RouterLink} to="/signin">
              Sign In
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
      grids:[]
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
    fetch(config.serverurl + "/htmlpages", fbody)
      .then(handleErrors)
      .then(response => response.json())
      .then(htmlpages => this.setState({ htmlpages: htmlpages }))
      .catch(err => showError(err))

      fetch(config.serverurl + "/grids", fbody)
      .then(handleErrors)
      .then(response => response.json())
      .then(grids => this.setState({ grids: grids }))
      .catch(err => showError(err))
  }
  render ()
  {
    const { htmlpages,grids } = this.state;
    return (
      <div><MenuAppBarInner
      htmlpages={htmlpages}
      grids={grids}

       /></div>
    )
  }
}
