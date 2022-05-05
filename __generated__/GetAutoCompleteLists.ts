/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAutoCompleteLists
// ====================================================

export interface GetAutoCompleteLists_medicalConditions {
  __typename: "MedicalCondition";
  id: string;
  name: string;
}

export interface GetAutoCompleteLists_surgeries {
  __typename: "Surgery";
  id: string;
  name: string;
}

export interface GetAutoCompleteLists_allergies {
  __typename: "Allergy";
  id: string;
  name: string;
}

export interface GetAutoCompleteLists {
  medicalConditions: GetAutoCompleteLists_medicalConditions[] | null;
  surgeries: GetAutoCompleteLists_surgeries[];
  allergies: GetAutoCompleteLists_allergies[];
}
