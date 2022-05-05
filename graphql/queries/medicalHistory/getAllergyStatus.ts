import { gql } from '@apollo/client';

const GET_ALLERGY_STATUS = gql`
  query GetAllergyStatus {
    node(id: "68719483897") {
      ... on User {
        medicalProfile {
          allergyStatus {
            allergy {
              id
              name
            }
            reactions
            hadAnaphylaxis
          }
        }
      }
    }
  }
`;

export default GET_ALLERGY_STATUS;
