import { gql } from '@apollo/client';

const GET_SMOKE = gql`
  query GetSmoke {
    node(id: "68719483897") {
      ... on User {
        medicalProfile {
          smokeAmount
          smokeStatus
          stopSmokeAge
          startSmokeAge
        }
      }
    }
  }
`;

export default GET_SMOKE;
