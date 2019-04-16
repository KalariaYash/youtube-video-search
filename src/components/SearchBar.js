import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import LogoutIcon from '@material-ui/icons/PowerSettingsNewRounded';
import { Link } from 'react-router-dom';
import {getUserData, setUserData} from '../config/HelperFunctions';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
});

class SearchBar extends React.Component {
  state = {
    searchTerm: ''
  };

  onSearchSubmit = (event) => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.searchTerm);
  }

  onClickLogOut = () => {
    const temp = getUserData();
    temp.keepMeLoggedInFlag = false;
    setUserData(temp);
  }

  render() {
    const { classes } = this.props;
    return (

      <AppBar position="static" style={{ margin: '0px', padding: '0px', position: 'fixed', top: '0', left: '0' }} >
        <Toolbar style={{ margin: '0px' }}>

          <Typography variant="h6" color="inherit" noWrap style={{ width: '15%' }}>
            Youtube Video Search
            </Typography>

          <div className={classes.search} style={{ width: '60%' }}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form onSubmit={this.onSearchSubmit}>
              <InputBase classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }} onChange={(event) => this.setState({ searchTerm: event.target.value })}
                placeholder="Search…"
              /></form>
          </div>

          <IconButton color="inherit" onClick={this.onClickLogOut} component={Link} to='/'>
            <LogoutIcon />
          </IconButton>

        </Toolbar>
      </AppBar>

    );
  }
}

export default withStyles(styles)(SearchBar);