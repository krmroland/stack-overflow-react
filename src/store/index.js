import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import NProgress from 'nprogress';
import Http from 'utils/Http';
import { get } from 'lodash';
import { activateLoading, deactivateLoading } from './actions/ui';
import { API_URL } from 'utils/constants';
import Notifications from './helpers/Notifications';
import rootReducer from './reducers';

const shouldLog = process.env.NODE_ENV === 'development';
const http = new Http(API_URL);
const middleware = [thunk.withExtraArgument(http)];

/* istanbul ignore if */
if (shouldLog) {
  middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

// hook into the http (fetch process) and (de)activate a loader
/* istanbul ignore next */
http.onStart(() => {
  store.dispatch(activateLoading());
  NProgress.start();
});
/* istanbul ignore next */
http.onFinished(() => {
  store.dispatch(deactivateLoading());
  NProgress.done();
});

/* istanbul ignore next */
http.onPass(response => {
  const message = response && response.message;
  if (message) window.Notify.success(message);
});

/* istanbul ignore next */
http.onFail(error => {
  const message = error && (error.detail || error.message);
  if (message) window.Notify.error(message);
});
// we will temporarily set the token from the local storage if it exists
http.setToken(get(JSON.parse(localStorage.getItem('user')), 'token'));

//we are going to need to use notifications almost every were, it makes sense to attach it to there window Object
window.Notify = new Notifications(store);

export default store;
