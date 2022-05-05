import { apolloClient } from '../../apolloClient';
import GET_SURGERY_STATUS from '../../queries/medicalHistory/getSurgeryStatus';
import { GetSurgeryStatus as SurgeryStatusServiceType } from '../../../__generated__/GetSurgeryStatus';

const getSurgeryStatus = () => {
  const response = apolloClient.query<SurgeryStatusServiceType>({
    query: GET_SURGERY_STATUS,
  });

  return response;
};

export default getSurgeryStatus;
