import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Paper from '@material-ui/core/Paper';
import AxiosConfig from '../config/AxiosConfig';
import { response } from '../config/Constants'
import {getUserData, setUserData} from '../config/HelperFunctions';
import ExtendedGridListTile from './ExtendedGridListTile';

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
    const temp = getUserData();
    temp.watchLater.push(video);
    setUserData(temp);
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper style={{ margin: '0px 0px 20px 0px' }}>
        <h3 style={{ padding: '10px', marginTop: '0px' }}>{this.props.category}</h3>
        <div className={classes.root} >
          <GridList className={classes.gridList} cols={6} style={{ overflow: 'auto', margin: '0px' }}>
          {this.state.videos.map(video => (
            <ExtendedGridListTile video = {video} videos={this.state.videos} classes={classes} onVideoSelect= {this.props.onVideoSelect} onIconClickHandler={this.props.onIconClickHandler} /> ))}
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


