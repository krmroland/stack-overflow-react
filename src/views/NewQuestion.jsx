import React from 'react';
import DefaultLayout from 'containers/layouts/Default';
import QuestionForm from 'components/questions/QuestionForm';

const NewQuestion = ({ history }) => (
  <DefaultLayout>
    <h3>Ask Away</h3>
    <QuestionForm history={history} />
  </DefaultLayout>
);

export default NewQuestion;
