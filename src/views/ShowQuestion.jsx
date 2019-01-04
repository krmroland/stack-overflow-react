import React from 'react';
import { connect } from 'react-redux';
import DefaultLayout from 'containers/layouts/Default';
import SingleQuestion from 'components/questions/Question';
import { fetchQuestionById } from 'store/actions/questions';
import { mapStateToProps, mapActionsToProps } from 'store/helpers';
class ShowQuestion extends React.Component {
  componentDidMount() {
    this.props.fecthById(this.props.match.params.id);
  }

  render() {
    const { question, loading } = this.props;
    return (
      <DefaultLayout>
        {question ? (
          <SingleQuestion question={question} complete />
        ) : !loading ? (
          <h2>Question not found</h2>
        ) : null}
      </DefaultLayout>
    );
  }
}

export default connect(
  mapStateToProps({ question: 'questions.single', loading: 'ui.loading' }),
  mapActionsToProps({ fecthById: fetchQuestionById }),
)(ShowQuestion);
