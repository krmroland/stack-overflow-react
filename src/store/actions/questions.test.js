import mockStore from 'tests/mockStore';
import types from 'store/types/questions';
import { prepareUrl } from 'utils/helpers';
import Factory from 'tests/factory';

import {
  addQuestion,
  getAllQuestions,
  setSingle,
  fetchQuestionById,
  setQuestions,
} from 'store/actions/questions';

describe('Article action tests', () => {
  test('add question returns the right type', () => {
    expect(addQuestion({})).toEqual(expect.objectContaining({ type: types.ADD_QUESTION }));
  });

  test('setQuestions returns the right type', () => {
    expect(setQuestions([])).toEqual(expect.objectContaining({ type: types.SET_QUESTIONS }));
  });

  test('fetchQuestionById sets a single question after fetching it', () => {
    const question = Factory.of('question').make();
    fetch.get(prepareUrl('questions/1'), { body: { data: question } });
    const store = mockStore({ questions: { all: [] } });

    store.dispatch(fetchQuestionById(1)).then(() => {
      expect(store.getActions()).toEqual([{ type: types.SET_SINGLE, question }]);
    });
  });

  test('setSingle returns the right type', () => {
    const question = {};

    expect(setSingle(question)).toEqual(
      expect.objectContaining({ type: types.SET_SINGLE, question }),
    );
  });
  test('getAllQuestions sorts the questions by updated_at', () => {
    const results = Factory.of('question').make(2);
    const store = mockStore({ questions: { all: [] } });
    const expectedActions = [
      {
        type: types.SET_QUESTIONS,
        questions: results.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)),
      },
    ];

    fetch.get(prepareUrl('questions'), { body: { data: results } });

    store.dispatch(getAllQuestions()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      fetch.restore();
    });
  });
});
