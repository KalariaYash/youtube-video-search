export const userDataReducer = (userData = {}, action) => {
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