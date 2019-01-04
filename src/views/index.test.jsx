import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import { prepareUrl } from 'utils/helpers';
import Factory from 'tests/factory';
import { LoginPage, RegistrationPage, IndexPage, ShowQuestion } from '.';

describe('View tests ', () => {
  test('Login page enders without crashing', () => {
    fetch.get(prepareUrl('questions'), { body: { data: Factory.of('question').make(2) } });

    [LoginPage, RegistrationPage, IndexPage].forEach(ViewComponent => {
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
  test('Show Question Renders without crashing', () => {
    fetch.get(prepareUrl('questions/1'), { body: { data: Factory.of('question').make(1) } });
    expect(() =>
      mount(
        <Provider store={store}>
          <MemoryRouter>
            <ShowQuestion match={{ params: { id: 1 } }} />
          </MemoryRouter>
        </Provider>,
      ),
    ).not.toThrow();
  });
});
