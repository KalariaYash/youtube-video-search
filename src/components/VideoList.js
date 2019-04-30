import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ onVideoSelect, videos, onIconClickHandler, icon, classes }) => {
    if (videos[0] === undefined) {
        return <div></div>;
    }
    const renderList = videos.map((video) => {
        return <VideoItem className='videoItem' onIconClickHandler={onIconClickHandler} videos={videos} classes={classes} onVideoSelect={onVideoSelect} video={video} icon={icon} />;
    });
    return <div >{renderList}</div>
};

export default VideoList;