import { gql } from '@apollo/client';

const GET_MEDICATION_STATUS = gql`
  query GetMedicationStatus {
    node(id: "68719483897") {
      ... on User {
        medicalProfile {
          medicationStatus {
            id
            dosage
            frequency
            medication {
              id
              name
            }
          }
        }
      }
    }
  }
`;

export default GET_MEDICATION_STATUS;
