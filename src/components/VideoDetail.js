import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div style={{ padding: '0px', width: '100%', height: '100%' }}>
      <Paper style={{ paddingTop: '0px' }}>
        <iFrame title='Video Player' src={videoSrc} style={{ width: '100%', height: '600px', maxHeight: '600px', paddingTop: '0px' }} />
      </Paper>
      <Paper style={{ padding: '10px' }} className='timepass'>
        <Typography variant="h5" component="h2">
          {video.snippet.title}
        </Typography>
        <Typography component="p">
          {video.snippet.description}
        </Typography>
      </Paper>
    </div>
  )
}

export default VideoDetail;