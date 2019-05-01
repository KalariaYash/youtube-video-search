export const selectedVideoReducer = (selectedVideo = null, action) => {
  if (action.type === 'VIDEO_SELECTED') {
    return action.payload;
  }
  return selectedVideo;
}