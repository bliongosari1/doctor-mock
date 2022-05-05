import { gql } from '@apollo/client';

export const CREATE_SURGERY_STATUS_STATUSES = gql`
  mutation CreateSurgeryStatuses($inputs: [CustomCreateSurgeryStatusInput!]!) {
    createSurgeryStatuses(inputs: $inputs) {
      surgeryStatuses {
        id
        createdAt
        modifiedAt
        medicalProfile {
          id
        }
        additionalInformation
        surgery {
          id
        }

        isElective
        surgeryToMedicalConditions {
          id
          surgery {
            id
          }
          medicalProfile {
            id
          }
        }
      }
    }
  }
`;
