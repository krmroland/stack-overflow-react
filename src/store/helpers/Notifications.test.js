import mockStore from 'tests/mockStore';
import types from 'store/types/notifications';
import Notifications from './Notifications';

const notifications = { message: '', className: '' };

const store = mockStore({ notifications });
const Notify = new Notifications(store);
jest.useFakeTimers();
const message = 'Hello world';

describe('Notifications', () => {
  beforeEach(() => store.clearActions());

  test('It flashes an error message', () => {
    Notify.error(message);
    expect(store.getActions()).toEqual([{ className: 'danger', message, type: types.SET_MESSAGE }]);
  });

  test('It flashes an success message', () => {
    Notify.success(message);
    expect(store.getActions()).toEqual([
      { className: 'success', message, type: types.SET_MESSAGE },
    ]);
  });
});
