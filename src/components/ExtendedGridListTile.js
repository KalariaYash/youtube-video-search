import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import WatchLaterRounded from '@material-ui/icons/WatchLaterRounded';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';

const ExtendedGridListTile = ({video, videos, onVideoSelect, onIconClickHandler, classes}) => {
    return (<GridListTile key={video.id.videoId} style={{ margin: '0px 0px 0px 10px', height: '220px' }}>
        <div>
            <div  >
                <img alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} onClick={() => onVideoSelect(video, videos)} style={{ height: '140px' }} />
            </div>
            <div>
                <ListItemText style={{maxWidth:'250px'}} onClick={() => onVideoSelect(video, videos)} className={classes.listItemText} primary={video.snippet.title} />

                <IconButton color="inherit" style={{ position: 'relative', top: '-22px', float: "right", padding: '0px 0px 0px 0px', margin: '0px' }} onClick={() => onIconClickHandler(video)}>
                    <WatchLaterRounded />
                </IconButton>

            </div>
        </div>
    </GridListTile>)
}

ExtendedGridListTile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default ExtendedGridListTile;