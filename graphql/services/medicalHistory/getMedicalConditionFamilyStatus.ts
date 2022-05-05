import { GetMedicalConditionFamilyStatus as MedicalConditionFamilyStatusType } from '../../../__generated__/GetMedicalConditionFamilyStatus';
import { apolloClient } from '../../apolloClient';
import GET_MEDICAL_CONDITION_FAMILY_STATUS from '../../queries/medicalHistory/getMedicalConditionFamilyStatus';

const getMedicalConditionFamilyStatus = () => {
  const response = apolloClient.query<MedicalConditionFamilyStatusType>({
    query: GET_MEDICAL_CONDITION_FAMILY_STATUS,
  });

  return response;
};

export default getMedicalConditionFamilyStatus;
