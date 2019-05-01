import { combineReducers } from 'redux';
import { userDataReducer } from './userDataReducer';
import { videosReducer } from './videosReducer';
import { selectedVideoReducer } from './selectedVideoReducer';

export default combineReducers({
  userData: userDataReducer,
  videos: videosReducer,
  selectedVideo: selectedVideoReducer
})