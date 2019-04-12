import SearchBar from '../components/SearchBar';
import React from 'react';
import AxiosConfig from '../config/AxiosConfig';
import Grid from '@material-ui/core/Grid';
import LeftMenuPane from '../components/LeftMenuPane';
import CategoryGrid from '../components/CategoryGrid';
import { response } from '../config/Constants';
import VideoListForAllPages from '../components/VideoListForAllPages';
import onSearchSubmit from '../config/HelperFunctions';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

class Home extends React.Component {
  state = { videos: [], selectedVideo: null }

  onTermSubmit = (term) => {
    // const response = await AxiosConfig.get('/search', {
    //   params: {
    //     q: term
    //   }
    // })

    this.setState({ videos: response.items, selectedVideo: null });

    // console.log(this.state);
    // onSearchSubmit(term).then(response => {
    //   this.setState({
    //      videos: response.items
    //   });

    // });
  }

  onVideoSelect = (video, videos) => {
    const temp = JSON.parse(localStorage.getItem('userData'));
    temp.history.push(video);
    localStorage.setItem('userData', JSON.stringify(temp));
    this.setState({ selectedVideo: video, videos: videos });

  }

  onIconClickHandler = (video) => {
    const temp = JSON.parse(localStorage.getItem('userData'));
    temp.watchLater.push(video);
    localStorage.setItem('userData', JSON.stringify(temp));
  }

  render() {
    let xsOfVideoDetail = 7;
    let xsOfVideoList = 3;
    if (!this.state.selectedVideo) {
      xsOfVideoDetail = 0;
      xsOfVideoList = 10;
    }


    if (this.state.videos[0] == undefined && this.state.selectedVideo == null) {
      return (
        <React.Fragment>
          <SearchBar onTermSubmit={this.onTermSubmit} />
          <Grid container style={{ position: 'relative', top: '60px', boxSizing: 'border-box' }}>
            <Grid item xs={2} >
              <LeftMenuPane />
            </Grid>
            <Grid item xs={10} className='videoDetail' style={{ position: 'relative' }}  >
              <CategoryGrid category="Movies" onVideoSelect={this.onVideoSelect} onIconClickHandler={this.onIconClickHandler} />
              <CategoryGrid category="Music" onVideoSelect={this.onVideoSelect} onIconClickHandler={this.onIconClickHandler} />
              <CategoryGrid category="Game" onVideoSelect={this.onVideoSelect} onIconClickHandler={this.onIconClickHandler} />
              <CategoryGrid category="Funny Videos" onVideoSelect={this.onVideoSelect} onIconClickHandler={this.onIconClickHandler} />
              <CategoryGrid category="Series" onVideoSelect={this.onVideoSelect} onIconClickHandler={this.onIconClickHandler} />
            </Grid>
          </Grid>
        </React.Fragment>);
    }

    return (
      <VideoListForAllPages videos={this.state.videos} selectedVideo={this.state.selectedVideo} onTermSubmit={this.onTermSubmit} onVideoSelect={this.onVideoSelect} xsOfVideoDetail={xsOfVideoDetail} xsOfVideoList={xsOfVideoList} icon='watchLater' onIconClickHandler={this.onIconClickHandler} />
    )
  }

}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles()(Home);
