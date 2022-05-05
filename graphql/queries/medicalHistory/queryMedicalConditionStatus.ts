import { gql } from '@apollo/client';

const GET_MEDICAL_CONDITION_STATUS = gql`
  query GetMedicalConditionStatus {
    node(id: "68719483897") {
      ... on User {
        medicalProfile {
          medicalConditionStatus {
            diagnosisYear
            diagnosisAge
            medicalCondition {
              id
              name
            }
          }
        }
      }
    }
  }
`;

export default GET_MEDICAL_CONDITION_STATUS;
