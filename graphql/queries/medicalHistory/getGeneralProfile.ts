import { gql } from '@apollo/client';

const GET_GENERAL_PROFILE = gql`
  query GetGeneralProfile {
    node(id: "68719483897") {
      ... on User {
        generalProfile {
          weight
          height
        }
      }
    }
  }
`;

export default GET_GENERAL_PROFILE;
