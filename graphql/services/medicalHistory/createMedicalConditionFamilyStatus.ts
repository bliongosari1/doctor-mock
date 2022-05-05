import { CreateMedicalConditionFamilyStatusesVariables } from '../../../__generated__/CreateMedicalConditionFamilyStatuses';
import { apolloClient } from '../../apolloClient';
import { CREATE_MEDICAL_CONDITION_FAMILY_STATUSES } from '../../mutations/createMedicalConditionFamilyStatuses';

const createMedicalConditionFamilyStatus = (
  variables: CreateMedicalConditionFamilyStatusesVariables
) => {
  const response = apolloClient.mutate<CreateMedicalConditionFamilyStatusesVariables>({
    mutation: CREATE_MEDICAL_CONDITION_FAMILY_STATUSES,
    variables,
  });

  return response;
};

export default createMedicalConditionFamilyStatus;
