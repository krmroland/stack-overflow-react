import React from 'react';
import renderer from 'react-test-renderer';

import TopNavBar from './TopNavBar';

describe('TopNavBar tests ', () => {
  test('It renders the same top navigation bar', () => {
    expect(renderer.create(<TopNavBar />).toJSON()).toMatchSnapshot();
  });
});
