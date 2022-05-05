import { gql } from '@apollo/client';

const GET_PRESENTING_COMPLAINTS = gql`
  query GetPresentingComplaints {
    presentingComplaints {
      id
      name
    }
  }
`;

export default GET_PRESENTING_COMPLAINTS;
