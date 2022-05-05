import { gql } from '@apollo/client';

export const CHECK_HEALTH = gql`
    mutation CheckHealth {
        checkHealth
    }
`;
