import { gql } from '@apollo/client';

const GET_MEDICAL_CONDITION_FAMILY_STATUS = gql`
  query GetMedicalConditionFamilyStatus {
    node(id: "68719483897") {
      ... on User {
        medicalProfile {
          medicalConditionFamilyStatus {
            familyMemberStatuses {
              relation
              diagnosisAge
            }
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

export default GET_MEDICAL_CONDITION_FAMILY_STATUS;
