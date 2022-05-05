import { gql } from '@apollo/client';

const GET_MEDICAL_CONDITIONS = gql`
  query GetMedicalConditions {
    medicalConditions {
      id
      name
    }
  }
`;

export default GET_MEDICAL_CONDITIONS;
