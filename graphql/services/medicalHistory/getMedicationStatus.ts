import { apolloClient } from '../../apolloClient';
import GET_MEDICATION_STATUS from '../../queries/medicalHistory/getMedicationStatus';
import { GetMedicationStatus } from '../../../__generated__/GetMedicationStatus';

const getMedicationStatus = () => {
  const response = apolloClient.query<GetMedicationStatus>({
    query: GET_MEDICATION_STATUS,
  });

  return response;
};

export default getMedicationStatus;
