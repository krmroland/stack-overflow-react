import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import { prepareUrl } from 'utils/helpers';
import Factory from 'tests/factory';
import * as AllViews from '.';

describe('View tests ', () => {
  test('Login page enders without crashing', () => {
    fetch.get(prepareUrl('questions'), { body: { data: Factory.of('question').make(2) } });
    fetch.get(prepareUrl('questions/1'), { body: { data: Factory.of('question').make(1) } });
    Object.keys(AllViews).forEach(view => {
      const ViewComponent = AllViews[view];

      expect(() =>
        mount(
          <Provider store={store}>
            <MemoryRouter>
              <ViewComponent match={{ params: { id: 1 } }} />
            </MemoryRouter>
          </Provider>,
        ),
      ).not.toThrow();
    });
  });
});
