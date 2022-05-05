import { gql } from '@apollo/client';

export const SUBMIT_SESSION = gql`
    mutation SubmitSession($input: SubmitSessionInput!) {
        submitSession(input: $input) {
            uuid
            reasons
            presentingComplaintIDs
            userID
            questionHistory
            additionalInfo
            isCompleted
        }
    }
`;
