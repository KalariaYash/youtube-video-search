import React from 'react';
import VideoListForAllPages from '../components/VideoListForAllPages';
import { response } from '../config/Constants';


class WatchLater extends React.Component {
  state = {
    videos: JSON.parse(localStorage.getItem('userData')).watchLater,
    selectedVideo: null,
    icon: 'remove'
  }

  onTermSubmit = async (term) => {
    // const response = await AxiosConfig.get('/search', {
    //   params: {
    //     q: term
    //   }
    // })

    this.setState({ videos: response.items, selectedVideo: null, icon: 'watchLater' });
  }

  onVideoSelect = (video, videos) => {
    this.setState({ selectedVideo: video });
  }

  onIconClickHandler = (video, icon) => {
    if (icon == 'remove') {
      const temp = JSON.parse(localStorage.getItem('userData'));
      temp.watchLater.splice(temp.watchLater.findIndex(item => item.id.videoId == video.id.videoId), 1);
      localStorage.setItem('userData', JSON.stringify(temp));
      this.setState({ videos: temp.watchLater });
    }
    else {
      const temp = JSON.parse(localStorage.getItem('userData'));
      temp.watchLater.push(video);
      localStorage.setItem('userData', JSON.stringify(temp));
    }
  }

  render() {
    let xsOfVideoDetail = 7;
    let xsOfVideoList = 3;
    if (!this.state.selectedVideo) {
      xsOfVideoDetail = 0;
      xsOfVideoList = 10;
    }
    return (
      <VideoListForAllPages videos={this.state.videos} selectedVideo={this.state.selectedVideo} onTermSubmit={this.onTermSubmit} onVideoSelect={this.onVideoSelect} xsOfVideoDetail={xsOfVideoDetail} xsOfVideoList={xsOfVideoList} icon={this.state.icon} onIconClickHandler={this.onIconClickHandler} />
    )
  }
}

export default WatchLater;