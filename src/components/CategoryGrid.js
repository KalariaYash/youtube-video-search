import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import AxiosConfig from '../config/AxiosConfig';
import { response } from '../config/Constants'
import WatchLaterRounded from '@material-ui/icons/WatchLaterRounded';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'scroll',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
});

class CategoryGrid extends React.Component {

  state = {
    videos: response.items
  };

  // onTermSubmit = async (term) =>{
  //   const response = await AxiosConfig.get('/search', {
  //     params: {
  //       q : term
  //     }
  //   })
  //   this.setState({'videos':response.items});
  // }

  onClickWatchLaterIcon = (video) => {
    const temp = JSON.parse(localStorage.getItem('userData'));
    temp.watchLater.push(video);
    localStorage.setItem('userData', JSON.stringify(temp));
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper style={{ margin: '0px 0px 20px 0px' }}>
        <h3 style={{ padding: '10px', marginTop: '0px' }}>{this.props.category}</h3>
        <div className={classes.root} >
          <GridList className={classes.gridList} cols={6} style={{ overflow: 'auto', margin: '0px' }}>
            {this.state.videos.map(video => (
              <GridListTile key={video.id.videoId} style={{ margin: '0px 0px 0px 10px', height: '220px' }}>
                <div>
                  <div  >
                    <img alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} onClick={() => this.props.onVideoSelect(video, this.state.videos)} style={{ height: '140px' }} />
                  </div>
                  <div>
                    <ListItemText onClick={() => this.props.onVideoSelect(video, this.state.videos)} className={classes.listItemText} primary={video.snippet.title} />

                    <IconButton color="inherit" style={{ position: 'relative', top: '-22px', float: "right", padding: '0px 0px 0px 0px', margin: '0px' }} onClick={() => this.props.onIconClickHandler(video)}>
                      <WatchLaterRounded />
                    </IconButton>

                  </div>
                </div>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </Paper>
    );
  }
}

CategoryGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CategoryGrid);


