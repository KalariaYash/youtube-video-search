import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ onVideoSelect, videos, onIconClickHandler, icon, classes }) => {
    const renderList = videos.map((video) => {
        return <VideoItem className='videoItem' onVideoSelect={onVideoSelect} video={video} videos={videos} onIconClickHandler={onIconClickHandler} icon={icon} />;
    });
    return <div >{renderList}</div>
};

export default VideoList;