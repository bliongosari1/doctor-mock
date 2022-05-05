import { gql } from '@apollo/client';

export const CREATE_MEDICATION_STATUSES = gql`
    mutation CreateMedicationStatuses($inputs: [CreateMedicationStatusInput!]!) {
        createMedicationStatuses(inputs: $inputs) {
            medicationStatuses {
                dosage
                frequency
                medication {
                    id
                }
            }
        }
    }
`;
