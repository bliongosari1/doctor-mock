import { GetAutoCompleteLists } from '../../../__generated__/GetAutoCompleteLists';
import { apolloClient } from '../../apolloClient';
import GET_AUTO_COMPLETE_LISTS from '../../queries/medicalHistory/getAutoCompleteLists';

const getAutoCompleteLists = () => {
  const response = apolloClient.query<GetAutoCompleteLists>({
    query: GET_AUTO_COMPLETE_LISTS,
  });

  return response;
};

export default getAutoCompleteLists;
