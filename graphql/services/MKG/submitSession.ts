import {
  SubmitSession,
  SubmitSessionVariables,
} from '../../../__generated__/SubmitSession';
import { apolloClient } from '../../apolloClient';
import { SUBMIT_SESSION } from '../../mutations/submitSession';

const submitSession = (variables: SubmitSessionVariables) => {
  const response = apolloClient.mutate<SubmitSession, SubmitSessionVariables>({
    mutation: SUBMIT_SESSION,
    variables,
  });

  return response;
};

export default submitSession;
