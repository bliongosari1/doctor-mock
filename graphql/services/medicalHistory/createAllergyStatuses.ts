import { apolloClient } from '../../apolloClient';
import { CREATE_ALLERGY_STATUSES } from '../../mutations/createAllergyStatuses';
import { CreateAllergyStatusesVariables } from '../../../__generated__/CreateAllergyStatuses';

const createAllergyStatuses = (variables: CreateAllergyStatusesVariables) => {
  const response = apolloClient.mutate<CreateAllergyStatusesVariables>({
    mutation: CREATE_ALLERGY_STATUSES,
    variables,
  });

  return response;
};

export default createAllergyStatuses;
