import React from 'react';
import { IconBook } from 'components/icons';
import { Form, Input, TextArea } from 'forms';

const QuestionForm = ({ history }) => (
  <Form
    name="questions-form"
    action="/questions"
    successSubmit={() => {
      history.push('/');
      window.Notify.success('Question was added successfully');
    }}
    button={() => (
      <div className="field">
        <button className="btn btn-primary">
          <IconBook />
          Publish
        </button>
      </div>
    )}
  >
    <Input label="Provide a title" name="title" />
    <TextArea
      label="Description"
      name="description"
      placeholder="Be specific so that your peers can help"
      rows="3"
    />
  </Form>
);

export default QuestionForm;
