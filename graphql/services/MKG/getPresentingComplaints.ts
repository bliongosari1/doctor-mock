import { GetPresentingComplaints } from '../../../__generated__/GetPresentingComplaints';
import { apolloClient } from '../../apolloClient';
import GET_PRESENTING_COMPLAINTS from '../../queries/MKG/getPresentingComplaints';

const getPresentingComplaints = () => {
  const response = apolloClient.query<GetPresentingComplaints>({
    query: GET_PRESENTING_COMPLAINTS,
  });

  return response;
};

export default getPresentingComplaints;
