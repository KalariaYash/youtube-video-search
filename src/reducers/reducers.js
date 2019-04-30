import { combineReducers } from 'redux';

const userDataReducer = (userData = {}, action) => {
  switch (action.type) {
    case 'SIGNED_UP':
      return { ...action.payload };
    case 'ADD_TO_HISTORY':
      userData.history.push(action.payload);
      return { ...userData };
    case 'ADD_TO_WATCHLATER':
      userData.watchLater.push(action.payload);
      return { ...userData };
    default: return userData;
  }
}

const videosReducer = (videos = [], action) => {
  if (action.type === 'FETCH_VIDEOS') {
    return action.payload;
  }
  return videos;
}

const selectedVideoReducer = (selectedVideo = null, action) => {
  if (action.type === 'VIDEO_SELECTED') {
    return action.payload;
  }
  return selectedVideo;
}

export default combineReducers({
  userData: userDataReducer,
  videos: videosReducer,
  selectedVideo: selectedVideoReducer
})