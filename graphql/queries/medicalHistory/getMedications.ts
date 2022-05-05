import { gql } from '@apollo/client';

const GET_MEDICATIONS = gql`
  query GetMedications {
    medications {
      id
      name
    }
  }
`;

export default GET_MEDICATIONS;
