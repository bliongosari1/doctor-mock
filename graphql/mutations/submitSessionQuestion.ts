import { gql } from '@apollo/client';

export const SUBMIT_SESSION_QUESTION = gql`
  mutation SubmitSessionQuestion($input: SubmitSessionQuestionInput!) {
    submitSessionQuestion(input: $input)
  }
`;
