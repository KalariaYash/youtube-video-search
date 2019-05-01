export const videosReducer = (videos = [], action) => {
  if (action.type === 'FETCH_VIDEOS') {
    return action.payload;
  }
  return videos;
}