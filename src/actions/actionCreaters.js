import { onSearchSubmit } from '../config/HelperFunctions';

export const signUp = (userData) => {
  return {
    type: 'SIGNED_UP',
    payload: userData
  };
}

export const fetchVideos = (searchTerm) => {
  if (searchTerm === "") {
    return {
      type: 'FETCH_VIDEOS',
      payload: []
    };
  }

  if (Array.isArray(searchTerm)){
    return {
      type: 'FETCH_VIDEOS',
      payload: searchTerm
    }
  }

  return async (dispatch) => {
    let response = await onSearchSubmit(searchTerm);
    dispatch({
      type: 'FETCH_VIDEOS',
      payload: response
    });
  }
};

export const selectVideo = (video) => {
  return {
    type: 'VIDEO_SELECTED',
    payload: video
  };
};

export const addToHistory = (video) => {
  return {
    type: 'ADD_TO_HISTORY',
    payload: video
  };
}

export const addToWatchlater = (video) => {
  return {
    type: 'ADD_TO_WATCHLATER',
    payload: video
  };
}