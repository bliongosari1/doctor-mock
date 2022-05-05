import { gql } from '@apollo/client';

const GET_NODE = gql`
  query GetNode($id: ID!) {
    node(id: $id) {
      id
      ... on MedicalProfile {
        id
      }
    }
  }
`;

export default GET_NODE;
