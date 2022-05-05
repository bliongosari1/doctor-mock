import { gql } from '@apollo/client';

export const CREATE_ALLERGY_STATUSES = gql`
    mutation CreateAllergyStatuses($inputs: [CreateAllergyStatusInput!]!) {
        createAllergyStatuses(inputs: $inputs) {
            allergyStatuses {
                id
                reactions
                hadAnaphylaxis
                allergy {
                    id
                    name
                }
            }
        }
    }
`;
