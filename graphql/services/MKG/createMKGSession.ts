import {
  CreateMKGSession,
  CreateMKGSessionVariables,
} from '../../../__generated__/CreateMKGSession';
import { apolloClient } from '../../apolloClient';
import { CREATE_MKG_SESSION } from '../../mutations/createMKGSession';

const createMKGSession = (variables: CreateMKGSessionVariables) => {
  const response = apolloClient.mutate<CreateMKGSession, CreateMKGSessionVariables>({
    mutation: CREATE_MKG_SESSION,
    variables,
  });

  return response;
};

export default createMKGSession;
