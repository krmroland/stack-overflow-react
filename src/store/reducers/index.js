import { combineReducers } from 'redux';
import forms from 'forms/store/reducer';
import notifications from './notifications';
import authentication from './authentication';

import ui from './ui';

export default combineReducers({
  ui,
  notifications,
  forms,
  authentication,
});
