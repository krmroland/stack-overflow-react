import React from 'react';
import { connect } from 'react-redux';
import DefaultLayout from 'containers/layouts/Default';
import AllQuestions from 'components/questions/Questions';
import { getAllQuestions } from 'store/actions/questions';
import { mapStateToProps, mapActionsToProps } from 'store/helpers';
class IndexPage extends React.Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    const { questions } = this.props;
    return (
      <DefaultLayout>
        <AllQuestions questions={questions} />
      </DefaultLayout>
    );
  }
}

export default connect(
  mapStateToProps({ questions: 'questions.all' }),
  mapActionsToProps({ fetchQuestions: getAllQuestions }),
)(IndexPage);
