import { gql } from '@apollo/client';

const GET_MEDICAL_PROFILE = gql`
  query GetMedicalProfile {
    node(id: "68719483897") {
      ... on User {
        medicalProfile {
          medicalConditionStatus {
            diagnosisYear
            diagnosisAge
            __typename
            medicalCondition {
              id
              name
            }
          }
          medicationStatus {
            id
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

export default GET_MEDICAL_PROFILE;
