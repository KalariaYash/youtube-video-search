import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Home from '@material-ui/icons/Home';
import WatchLaterRounded from '@material-ui/icons/WatchLaterRounded';
import HistoryRounded from '@material-ui/icons/HistoryRounded';
import VideoList from '../components/VideoList';
import ExtendedMenuItem from './ExtendedMenuItem';

class LeftMenuPane extends React.Component {

  render() {
    //const { classes } = this.props;
    return (
      <Paper style={{ position: 'fixed', top: '60px', left: '0', width: '320px', maxWidth:'320px', height: '100%' }}>
        <MenuList >
          <ExtendedMenuItem iconComponent ={<Home/>} onClickMethod={() => {}} redirectTo="/" listItemText="Home"/>
          <ExtendedMenuItem iconComponent ={<WatchLaterRounded/>} onClickMethod={() => {VideoList.forceUpdate()}} redirectTo="/watchlater" listItemText="Watch Later"/>
          <ExtendedMenuItem iconComponent ={<HistoryRounded/>} onClickMethod={() => {VideoList.forceUpdate()}} redirectTo="/history" listItemText="History"/>
        </MenuList>
      </Paper>
    )
  }
}

export default LeftMenuPane;