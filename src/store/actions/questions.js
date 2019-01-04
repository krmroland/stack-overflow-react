import types from 'store/types/questions';

export const addQuestion = question => ({ type: types.ADD_QUESTION, question });

export const setQuestions = questions => ({ type: types.SET_QUESTIONS, questions });

export const setSingle = question => ({ type: types.SET_SINGLE, question });

export const fetchQuestionById = id => (dispatch, getState, http) =>
  http
    .withAuthentication()
    .get(`questions/${id}`)
    .then(({ data }) => dispatch(setSingle(data)));

export const getAllQuestions = () => (dispatch, getState, http) =>
  http
    .withAuthentication()
    .get('/questions')
    .then(({ data }) => {
      const toDate = ({ updated_at: updatedAt }) => new Date(updatedAt);

      return dispatch(setQuestions(data.sort((a, b) => toDate(b) - toDate(a))));
    });
