import { gql } from '@apollo/client';

const GET_SURGERY_STATUS = gql`
  query GetSurgeryStatus {
    node(id: "68719483897") {
      ... on User {
        medicalProfile {
          surgeryStatus {
            date
            additionalInformation
            surgery {
              id
              name
            }
            isElective
            surgeryToMedicalConditions {
              medicalCondition {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`;

export default GET_SURGERY_STATUS;
