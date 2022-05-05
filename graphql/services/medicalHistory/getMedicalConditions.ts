import { GetMedicalConditions as medicalConditionsType } from '../../../__generated__/GetMedicalConditions';
import { apolloClient } from '../../apolloClient';
import GET_MEDICAL_CONDITIONS from '../../queries/medicalHistory/getMedicalConditions';

const getMedicalConditions = () => {
  const response = apolloClient.query<medicalConditionsType>({
    query: GET_MEDICAL_CONDITIONS,
  });

  return response;
};

export default getMedicalConditions;
