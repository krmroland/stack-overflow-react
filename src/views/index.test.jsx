import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import * as AllViews from '.';

describe('View tests ', () => {
  test('Login page enders without crashing', () => {
    Object.keys(AllViews).forEach(view => {
      const ViewComponent = AllViews[view];

      expect(() =>
        mount(
          <Provider store={store}>
            <MemoryRouter>
              <ViewComponent />
            </MemoryRouter>
          </Provider>,
        ),
      ).not.toThrow();
    });
  });
});
