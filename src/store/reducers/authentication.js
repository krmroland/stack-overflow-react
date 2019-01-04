import types from 'store/types/authentication';

const initialstate = {
  user: JSON.parse(localStorage.getItem('user') || null),
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case types.LOGIN_USER:
      // we will temporarily store the user's token in localStorage
      // but we will come back to this in future
      localStorage.setItem('user', JSON.stringify(action.user));
      return { ...state, user: action.user };
    case types.UNSET_USER:
      localStorage.removeItem('user');
      return { ...state, user: null };
    default:
      return state;
  }
};
