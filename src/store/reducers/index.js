import { combineReducers } from 'redux';
import forms from 'forms/store/reducer';
import notifications from './notifications';
import authentication from './authentication';
import questions from './questions';
import ui from './ui';

export default combineReducers({
  ui,
  notifications,
  questions,
  forms,
  authentication,
});
