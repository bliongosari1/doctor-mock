import { gql } from '@apollo/client';

const GET_AUTO_COMPLETE_LISTS = gql`
    query GetAutoCompleteLists {
        medicalConditions {
            id
            name
        }
        surgeries {
            id
            name
        }
        allergies {
            id
            name
        }
    }
`;

export default GET_AUTO_COMPLETE_LISTS;
