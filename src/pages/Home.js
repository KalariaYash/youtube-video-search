import SearchBar from '../components/SearchBar';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import LeftMenuPane from '../components/LeftMenuPane';
import CategoryGrid from '../components/CategoryGrid';
import VideoListForAllPages from '../components/VideoListForAllPages';
import PropTypes from 'prop-types';
import { categoryNames,label } from '../config/Constants';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { fetchVideos, selectVideo, addToHistory, addToWatchlater } from '../actions/actionCreaters';
import { notificationError, notificationSuccess, notificationWarn } from '../components/toastMessage';

class Home extends React.Component {
  componentWillMount() {
    if (this.props.userData != null ? this.props.userData.keepMeLoggedInFlag === false : true) {
      notificationError(label.loginFirst);
      this.props.history.push('/');
    }
  }

  onTermSubmit = (term) => {
    this.props.fetchVideos(term);
    this.props.selectVideo(null);
  }

  onIconClickHandler = (video) => {
    notificationError(label.addToWatchLater);
    this.props.addToWatchlater(video);
  }

  onVideoSelect = (video, videos) => {
    this.props.addToHistory(video);
    this.props.selectVideo(video);
    this.props.fetchVideos(videos);
  }

  render() {
    const { videos, selectedVideo } = this.props;
    let xsOfVideoDetail = 7;
    let xsOfVideoList = 3;
    if (!selectedVideo) {
      xsOfVideoDetail = 0;
      xsOfVideoList = 10;
    }

    if (videos[0] === undefined && selectedVideo === null) {
      return (
        <React.Fragment>
          <SearchBar onTermSubmit={this.onTermSubmit} />
          <Grid container style={{ position: 'relative', top: '60px', boxSizing: 'border-box' }}>
            <Grid item xs={2} >
              <LeftMenuPane />
            </Grid>
            <Grid item xs={10} className='videoDetail' style={{ position: 'relative' }}  >
              <Paper style={{ padding: '0px', margin: '0px' }}>
                {categoryNames.map(categoryName => (
                  <CategoryGrid category={categoryName} onVideoSelect={this.onVideoSelect} onIconClickHandler={this.onIconClickHandler} />
                ))}
              </Paper>
            </Grid>
          </Grid>
        </React.Fragment>);
    }

    return (
      <VideoListForAllPages onTermSubmit={this.onTermSubmit} videos={videos} onVideoSelect={this.onVideoSelect} onIconClickHandler={this.onIconClickHandler} xsOfVideoDetail={xsOfVideoDetail} xsOfVideoList={xsOfVideoList} icon='watchLater' />
    )
  }
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    userData: state.userData,
    videos: state.videos,
    selectedVideo: state.selectedVideo
  };
};

const mapDispatchToProps = { selectVideo, fetchVideos, addToHistory, addToWatchlater };

export default connect(mapStateToProps, mapDispatchToProps)(Home);