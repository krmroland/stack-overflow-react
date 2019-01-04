import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockStore from 'tests/mockStore';
import Notifications from 'store/helpers/Notifications';
configure({ adapter: new Adapter() });

global.fetch = require('fetch-mock').sandbox();

afterEach(() => {
  fetch.restore();
});

global.Notify = new Notifications(mockStore({}));
