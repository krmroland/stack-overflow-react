import types from 'store/types/authentication';
import mockStore from 'tests/mockStore';
import { loginUser, logoutUser } from './authentication';

describe('Authentication actions', () => {
  test('loginUser returns the right type and name', () => {
    const user = { name: 'krmroland' };

    const store = mockStore({});

    store.dispatch(loginUser(user));

    expect(store.getActions()).toEqual([{ type: types.LOGIN_USER, user }]);
  });

  test('logoutUser dispatches the logout action', () => {
    const store = mockStore({});
    // an array has a push method on it's prototype, we will use it as  mock for history
    const history = [];

    store.dispatch(logoutUser(history));
    expect(store.getActions()).toEqual([{ type: types.UNSET_USER }]);
  });
});
