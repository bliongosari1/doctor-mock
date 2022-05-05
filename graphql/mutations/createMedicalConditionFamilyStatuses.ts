import { gql } from '@apollo/client';

export const CREATE_MEDICAL_CONDITION_FAMILY_STATUSES = gql`
    mutation CreateMedicalConditionFamilyStatuses($inputs: [CreateMedicalConditionFamilyStatusInput!]!) {
        createMedicalConditionFamilyStatuses(inputs: $inputs) {
            medicalConditionFamilyStatuses {
                id
                medicalCondition {
                    id
                    name
                }
                familyMemberStatuses {
                    relation
                    diagnosisAge
                }
            }
        }
    }
`;
