import React from 'react';
import { shallow } from 'enzyme';
import Factory from 'tests/factory';
import Question from './Question';

describe('Question', () => {
  test('It renders without crashing', () => {
    const question = Factory.of('question').make();

    expect(() => shallow(<Question question={question} />)).not.toThrow();
  });
});
