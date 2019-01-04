import React from 'react';
import { shallow } from 'enzyme';
import Factory from 'tests/factory';
import Questions from './Questions';

describe('Questions', () => {
  test('It renders the correct number of questions', () => {
    const questions = Factory.of('question').make(2);
    const wrapper = shallow(<Questions questions={questions} />);

    expect(wrapper.children()).toHaveLength(2);
  });
});
