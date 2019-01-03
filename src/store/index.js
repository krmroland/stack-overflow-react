import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const shouldLog = process.env.NODE_ENV === 'development';
const middleware = [thunk];

/* istanbul ignore if */
if (shouldLog) {
  middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
