import { gql } from '@apollo/client';

const GET_SEX = gql`
  query GetSex {
    node(id: "68719483897") {
      ... on User {
        medicalProfile {
          sexualActive
          hadPregnancy
          pregnancyCount
        }
      }
    }
  }
`;

export default GET_SEX;
