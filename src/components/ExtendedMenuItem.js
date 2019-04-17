import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

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

const ExtendedMenuItem = ({ iconComponent, onClickMethod, redirectTo, classes, listItemText }) => {
  return (
    <MenuItem className={classes.menuItem} onClick={onClickMethod} component={Link} to={redirectTo}>
      <ListItemIcon className={classes.icon}>
        {iconComponent}
      </ListItemIcon>
      <ListItemText classes={{ primary: classes.primary }} inset primary={listItemText} />
    </MenuItem>
  )
}

ExtendedMenuItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExtendedMenuItem);