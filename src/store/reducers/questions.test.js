import questionsReducer from 'store/reducers/questions';
import types from 'store/types/questions';
import Factory from 'tests/factory';

let initialState;
let questions;

describe('Questions reducer', () => {
  beforeEach(() => {
    initialState = { all: [] };
    questions = [{ title: 'Some title' }, { title: 'some other titles' }];
  });

  test('It sets all questions', () => {
    const newState = questionsReducer(initialState, { type: types.SET_QUESTIONS, questions });

    expect(newState.all).toHaveLength(2);
  });

  test('It adds a new questions', () => {
    const newState = questionsReducer(initialState, {
      type: types.ADD_ARTICLE,
      questions: { title: 'Hey' },
    });

    expect(newState.all).toHaveLength(1);
  });

  test('SET_SINGLE sets a single question', () => {
    const initial = { single: null, all: [] };
    const question = Factory.of('question').make();

    const newState = questionsReducer(initial, {
      type: types.SET_SINGLE,
      question,
    });

    expect(newState.single).toEqual(question);
  });
});
