import types from 'store/types/notifications';
const initialState = { message: '', className: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_MESSAGE:
      return { message: action.message, className: action.className };
    case types.UNSET_MESSAGE:
      return initialState;
    default:
      return state;
  }
};
