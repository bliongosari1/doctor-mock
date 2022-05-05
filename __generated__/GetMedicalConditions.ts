/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMedicalConditions
// ====================================================

export interface GetMedicalConditions_medicalConditions {
  __typename: "MedicalCondition";
  id: string;
  name: string;
}

export interface GetMedicalConditions {
  medicalConditions: GetMedicalConditions_medicalConditions[] | null;
}
