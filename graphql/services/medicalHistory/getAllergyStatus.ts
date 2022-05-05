import { apolloClient } from '../../apolloClient';
import { GetAllergyStatus as AllergyStatusServiceType } from '../../../__generated__/GetAllergyStatus';
import GET_ALLERGY_STATUS from '../../queries/medicalHistory/getAllergyStatus';

const getAllergyStatus = () => {
  const response = apolloClient.query<AllergyStatusServiceType>({
    query: GET_ALLERGY_STATUS,
  });

  return response;
};

export default getAllergyStatus;
