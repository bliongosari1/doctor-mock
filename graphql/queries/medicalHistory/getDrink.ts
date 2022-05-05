import { gql } from '@apollo/client';

const GET_DRINK = gql`
  query GetDrink {
    node(id: "68719483897") {
      ... on User {
        medicalProfile {
          drinkFrequency
          drinkPerSession
          wantReduceDrink
        }
      }
    }
  }
`;

export default GET_DRINK;
