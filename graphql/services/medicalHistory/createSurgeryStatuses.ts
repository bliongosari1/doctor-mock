import { apolloClient } from '../../apolloClient';
import { CREATE_SURGERY_STATUS_STATUSES } from '../../mutations/createSurgeryStatuses';
import { CreateSurgeryStatusesVariables } from '../../../__generated__/CreateSurgeryStatuses';

const createSurgeryStatuses = (variables: CreateSurgeryStatusesVariables) => {
  const response = apolloClient.mutate<CreateSurgeryStatusesVariables>({
    mutation: CREATE_SURGERY_STATUS_STATUSES,
    variables,
  });

  return response;
};

export default createSurgeryStatuses;
