import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from './Sidebar';

describe('Sidebar tests ', () => {
  test('It renders the same sidebar', () => {
    expect(
      renderer
        .create(
          <MemoryRouter>
            <Sidebar user={{ name: 'Some user' }} />
          </MemoryRouter>,
        )
        .toJSON(),
    ).toMatchSnapshot();
  });
});
