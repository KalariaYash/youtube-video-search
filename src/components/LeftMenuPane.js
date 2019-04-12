import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import WatchLaterRounded from '@material-ui/icons/WatchLaterRounded';
import HistoryRounded from '@material-ui/icons/HistoryRounded';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import VideoList from '../components/VideoList';

const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  primary: {},
  icon: {},
});

class LeftMenuPane extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} style={{ position: 'fixed', top: '60px', left: '0', width: '320px', height: '100%' }}>
        <MenuList >
          <MenuItem className={classes.menuItem} component={Link} to="/">
            <ListItemIcon className={classes.icon}>
              <Home />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="Home" />
          </MenuItem>
          <MenuItem onClick={() => VideoList.forceUpdate()} className={classes.menuItem} component={Link} to="/watchlater">
            <ListItemIcon className={classes.icon}>
              <WatchLaterRounded />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="Watch Later" />
          </MenuItem>
          <MenuItem onClick={() => VideoList.forceUpdate()} className={classes.menuItem} component={Link} to="/history">
            <ListItemIcon className={classes.icon}>
              <HistoryRounded />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="History" />
          </MenuItem>
        </MenuList>
      </Paper>
    )
  }
}

LeftMenuPane.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftMenuPane);