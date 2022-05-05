import {
  SubmitSessionQuestion,
  SubmitSessionQuestionVariables,
} from '../../../__generated__/SubmitSessionQuestion';
import { apolloClient } from '../../apolloClient';
import { SUBMIT_SESSION_QUESTION } from '../../mutations/submitSessionQuestion';

const submitSessionQuestion = (variables: SubmitSessionQuestionVariables) => {
  const response = apolloClient.mutate<
    SubmitSessionQuestion,
    SubmitSessionQuestionVariables
  >({
    mutation: SUBMIT_SESSION_QUESTION,
    variables,
  });

  return response;
};

export default submitSessionQuestion;
