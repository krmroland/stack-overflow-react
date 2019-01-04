import types from 'store/types/notifications';

export const setMessage = (message, className) => ({ type: types.SET_MESSAGE, message, className });
export const unSetMessage = () => ({ type: types.UNSET_MESSAGE });
