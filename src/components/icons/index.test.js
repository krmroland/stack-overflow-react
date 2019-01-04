import React from 'react';
import renderer from 'react-test-renderer';

import * as AllIcons from 'components/icons';

describe('Icon Tests ', () => {
  test('All icons render the same ui without changing', () => {
    Object.keys(AllIcons).map(icon => {
      const IconComponent = AllIcons[icon];
      expect(renderer.create(<IconComponent />).toJSON()).toMatchSnapshot();
      return null;
    });
  });
});
