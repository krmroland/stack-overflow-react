import configureMockStore from 'redux-mock-store';
import { API_URL } from 'utils/constants';
import thunk from 'redux-thunk';
import Http from 'utils/Http';

export default configureMockStore([thunk.withExtraArgument(new Http(API_URL))]);
