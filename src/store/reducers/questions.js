import types from 'store/types/questions';

const initialState = { all: [], single: null };

const addQuestion = (state, question) => {
  const questions = state.all;
  questions.unshift(question);
  return { ...state, all: [...questions] };
};

export default (state = initialState, payload) => {
  switch (payload.type) {
    case types.ADD_ARTICLE:
      return addQuestion(state, payload.question);
    case types.SET_SINGLE:
      return { ...state, single: payload.question };
    case types.SET_QUESTIONS:
      return { ...state, all: payload.questions };

    default:
      return state;
  }
};
