import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import WatchLaterRounded from '@material-ui/icons/WatchLaterRounded';
import RemoveCircleRounded from '@material-ui/icons/RemoveCircleRounded';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  listItem: {
    '&:focus': {
      backgroundColor: '#f44336',
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  primary: {},
  icon: {},
});

const VideoItem = ({ video, onVideoSelect, onIconClickHandler, videos, icon, classes }) => {

  return (<div className={classes.root}>
    <ListItem className={classes.listItem} style={{ maxHeight: '100px' }} button>
      <ListItemIcon className={classes.listItemIcon} >
        <img className='videoItem' alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} onClick={() => onVideoSelect(video, videos)} style={{ maxHeight: '90px', maxWidth: '150px' }} />
      </ListItemIcon>
      <ListItemText onClick={() => onVideoSelect(video, videos)} className={classes.listItemText} primary={video.snippet.title} />
      {icon == 'watchLater' && <IconButton className='videoItem' color="inherit" style={{ float: "right", padding: '0px 10px 0px 0px', margin: '0px' }} onClick={() => onIconClickHandler(video, icon)}><WatchLaterRounded /></IconButton>}
      {icon == 'remove' && <IconButton className='videoItem' color="inherit" style={{ float: "right", padding: '0px 10px 0px 0px', margin: '0px' }} onClick={() => onIconClickHandler(video, icon)}><RemoveCircleRounded /></IconButton>}
    </ListItem>

    <Divider className='videoItem' />
  </div>);
};

VideoItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VideoItem);