import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Home from '@material-ui/icons/Home';
import WatchLaterRounded from '@material-ui/icons/WatchLaterRounded';
import HistoryRounded from '@material-ui/icons/HistoryRounded';
import ExtendedMenuItem from './ExtendedMenuItem';
import { fetchVideos, selectVideo } from '../actions/actionCreaters';
import { connect } from 'react-redux';
import '../style/specialBackground.css';

class LeftMenuPane extends React.Component {
  onOptionClick = () => {
    this.props.selectVideo(null);
    this.props.fetchVideos("");
  }
  render() {
    return (
      <Paper style={{ position: 'fixed', top: '60px', left: '0', width: '320px', maxWidth: '320px', height: '100%' }}>
        <MenuList >
          <ExtendedMenuItem iconComponent={<Home />} onClickMethod={() => { this.onOptionClick(); }} redirectTo="/home" listItemText="Home" />
          <ExtendedMenuItem iconComponent={<WatchLaterRounded />} onClickMethod={() => { this.onOptionClick(); }} redirectTo="/watchlater" listItemText="Watch Later" />
          <ExtendedMenuItem iconComponent={<HistoryRounded />} onClickMethod={() => { this.onOptionClick(); }} redirectTo="/history" listItemText="History" />
        </MenuList>
      </Paper>
    )
  }
}

const mapDispatchToProps = { fetchVideos, selectVideo };

export default connect(null, mapDispatchToProps)(LeftMenuPane);