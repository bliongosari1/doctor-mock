import { apolloClient } from '../../apolloClient';
import { CREATE_MEDICATION_STATUSES } from '../../mutations/createMedicationStatuses';
import { CreateMedicationStatusesVariables } from '../../../__generated__/CreateMedicationStatuses';

const createMedicationStatuses = (variables: CreateMedicationStatusesVariables) => {
  const response = apolloClient.mutate<CreateMedicationStatusesVariables>({
    mutation: CREATE_MEDICATION_STATUSES,
    variables,
  });

  return response;
};

export default createMedicationStatuses;
