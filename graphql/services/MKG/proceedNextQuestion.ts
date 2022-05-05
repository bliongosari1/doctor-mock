import {
  ProceedNextQuestion,
  ProceedNextQuestionVariables,
} from '../../../__generated__/ProceedNextQuestion';
import { apolloClient } from '../../apolloClient';
import PROCEED_NEXT_QUESTION from '../../queries/MKG/proceedNextQuestion';

const proceedNextQuestion = (variables: ProceedNextQuestionVariables) => {
  const response = apolloClient.query<ProceedNextQuestion, ProceedNextQuestionVariables>({
    query: PROCEED_NEXT_QUESTION,
    variables,
  });

  return response;
};

export default proceedNextQuestion;
