import { GetAlternativeMedicine } from '../../../__generated__/GetAlternativeMedicine';
import { apolloClient } from '../../apolloClient';
import GET_ALTERNATIVE_MEDICINE_STATUS from '../../queries/medicalHistory/getAlternativeMedicineStatus';

const getAlternativeMedicineStatus = () => {
  const response = apolloClient.query<GetAlternativeMedicine>({
    query: GET_ALTERNATIVE_MEDICINE_STATUS,
  });

  return response;
};

export default getAlternativeMedicineStatus;
