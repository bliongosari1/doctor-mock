import { apolloClient } from '../../apolloClient';
import GET_MEDICAL_CONDITION_STATUS from '../../queries/medicalHistory/queryMedicalConditionStatus';
import { GetMedicalConditionStatus as medicalConditionStatusServiceType } from '../../../__generated__/GetMedicalConditionStatus';

const getMedicalConditionStatus = () => {
  const response = apolloClient.query<medicalConditionStatusServiceType>({
    query: GET_MEDICAL_CONDITION_STATUS,
  });

  return response;
};

export default getMedicalConditionStatus;
