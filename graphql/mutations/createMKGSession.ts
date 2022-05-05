import { gql } from '@apollo/client';

export const CREATE_MKG_SESSION = gql`
  mutation CreateMKGSession($input: CreateMKGSessionInput) {
    createMKGSession(input: $input) {
      uuid
      userID
      reasons
    }
  }
`;
