import types from 'store/types/authentication';

export const setUser = user => ({ type: types.LOGIN_USER, user });
export const unsetUser = () => ({ type: types.UNSET_USER });
export const loginUser = ({ name, token }) => (dispatch, getState, http) => {
  // we will set the token every time a user is logged in
  http.setToken(token);

  dispatch(setUser({name,token}));
};

export const logoutUser = history => (dispatch, getState, http) => {
  window.Notify.success('You were successfully logged out of the system');
  history.push('/');
  // we will clear any available tokens
  http.clearToken();

  return dispatch(unsetUser());
};
