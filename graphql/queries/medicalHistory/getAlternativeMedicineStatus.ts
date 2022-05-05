import { gql } from '@apollo/client';

const GET_ALTERNATIVE_MEDICINE_STATUS = gql`
  query GetAlternativeMedicine {
    node(id: "68719483897") {
      ... on User {
        medicalProfile {
          alternativeMedicineStatus {
            id
            dosage
            frequency
            alternativeMedicine {
              id
              name
            }
          }
        }
      }
    }
  }
`;

export default GET_ALTERNATIVE_MEDICINE_STATUS;
