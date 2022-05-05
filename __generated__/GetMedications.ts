/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMedications
// ====================================================

export interface GetMedications_medications {
  __typename: "Medication";
  id: string;
  name: string;
}

export interface GetMedications {
  medications: GetMedications_medications[] | null;
}
