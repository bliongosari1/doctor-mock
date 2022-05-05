import { apolloClient } from '../../apolloClient';
import { GetMedications as medicationsType } from '../../../__generated__/GetMedications';
import GET_MEDICATIONS from '../../queries/medicalHistory/getMedications';

const getMedications = () => {
  const response = apolloClient.query<medicationsType>({
    query: GET_MEDICATIONS,
  });

  return response;
};

export default getMedications;
