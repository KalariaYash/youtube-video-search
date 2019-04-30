import React from 'react';
import VideoListForAllPages from '../components/VideoListForAllPages';
import { connect } from 'react-redux';
import { fetchVideos, selectVideo, addToHistory, addToWatchlater, signUp } from '../actions/actionCreaters';
import { label } from '../config/Constants';
import { notificationError, notificationSuccess, notificationWarn } from '../components/toastMessage';

class History extends React.Component {
  componentWillMount() {
    if (this.props.userData != null ? this.props.userData.keepMeLoggedInFlag === false : true) {
      notificationError(label.loginFirst);
      this.props.history.push('/');
    }
  }

  state = {
    icon: 'remove'
  }

  onVideoSelect = (video, videos) => {
    this.props.selectVideo(video);
    this.props.fetchVideos(videos);
  }

  onTermSubmit = (term) => {
    this.props.fetchVideos(term);
    this.props.selectVideo(null);
    this.setState({ icon: 'watchLater' })
  }

  onIconClickHandler = (video, icon) => {
    const temp = this.props.userData;

    if (icon == 'remove') {
      notificationError(label.removeFromHistory);
      temp.history.splice(temp.history.findIndex(item => item.id.videoId == video.id.videoId), 1);
      this.props.signUp(temp);
    }
    else {
      notificationError(label.removeFromWatchLater);
      this.props.addToWatchlater(video);
    }
  }

  render() {
    let xsOfVideoDetail = 7;
    let xsOfVideoList = 3;
    if (!this.props.selectedVideo) {
      xsOfVideoDetail = 0;
      xsOfVideoList = 10;
    }

    if (this.props.searchVideos[0] !== undefined) {
      return (
        <VideoListForAllPages videos={this.props.searchVideos} selectedVideo={this.props.selectedVideo} onTermSubmit={this.onTermSubmit} onVideoSelect={this.onVideoSelect} xsOfVideoDetail={xsOfVideoDetail} xsOfVideoList={xsOfVideoList} icon={this.state.icon} onIconClickHandler={this.onIconClickHandler} />
      )
    }
    return (
      <VideoListForAllPages videos={this.props.videos} selectedVideo={this.props.selectedVideo} onTermSubmit={this.onTermSubmit} onVideoSelect={this.onVideoSelect} xsOfVideoDetail={xsOfVideoDetail} xsOfVideoList={xsOfVideoList} icon={this.state.icon} onIconClickHandler={this.onIconClickHandler} />
    )
  }
}

const mapStateToProps = state => {
  return {
    userData: state.userData,
    videos: state.userData.history,
    selectedVideo: state.selectedVideo,
    searchVideos: state.videos
  };
};

const mapDispatchToProps = { selectVideo, fetchVideos, addToHistory, addToWatchlater, signUp };

export default connect(mapStateToProps, mapDispatchToProps)(History);