import SearchBar from './SearchBar';
import React from 'react';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper/Paper';
import LeftMenuPane from './LeftMenuPane';

const VideoListForAllPages = ({ onTermSubmit, xsOfVideoDetail, onIconClickHandler, xsOfVideoList, videos, onVideoSelect, icon }) => {
  return (
    <React.Fragment>
      <SearchBar onTermSubmit={onTermSubmit} />
      <Grid container style={{ position: 'relative', top: '60px', boxSizing: 'border-box' }}>
        <Grid item xs={2}>
          <LeftMenuPane />
        </Grid>
        <Grid item xs={xsOfVideoDetail} className='videoDetail' style={{ position: 'relative' }} >
          <VideoDetail />
        </Grid>
        <Grid item xs={xsOfVideoList} >
          <Paper style={{ position: 'relative', margin: '0px', padding: '0px' }}><VideoList onVideoSelect={onVideoSelect} videos={videos} onIconClickHandler={onIconClickHandler} icon={icon} /></Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default VideoListForAllPages;