/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateMedicalConditionFamilyStatusInput, FAMILY_RELATION, DIAGNOSIS_AGE } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateMedicalConditionFamilyStatuses
// ====================================================

export interface CreateMedicalConditionFamilyStatuses_createMedicalConditionFamilyStatuses_medicalConditionFamilyStatuses_medicalCondition {
  __typename: "MedicalCondition";
  id: string;
  name: string;
}

export interface CreateMedicalConditionFamilyStatuses_createMedicalConditionFamilyStatuses_medicalConditionFamilyStatuses_familyMemberStatuses {
  __typename: "FamilyMemberStatus";
  relation: FAMILY_RELATION;
  diagnosisAge: DIAGNOSIS_AGE;
}

export interface CreateMedicalConditionFamilyStatuses_createMedicalConditionFamilyStatuses_medicalConditionFamilyStatuses {
  __typename: "MedicalConditionFamilyStatus";
  id: string;
  medicalCondition: CreateMedicalConditionFamilyStatuses_createMedicalConditionFamilyStatuses_medicalConditionFamilyStatuses_medicalCondition;
  familyMemberStatuses: CreateMedicalConditionFamilyStatuses_createMedicalConditionFamilyStatuses_medicalConditionFamilyStatuses_familyMemberStatuses[];
}

export interface CreateMedicalConditionFamilyStatuses_createMedicalConditionFamilyStatuses {
  __typename: "CreateMedicalConditionFamilyStatusesPayload";
  medicalConditionFamilyStatuses: CreateMedicalConditionFamilyStatuses_createMedicalConditionFamilyStatuses_medicalConditionFamilyStatuses[];
}

export interface CreateMedicalConditionFamilyStatuses {
  createMedicalConditionFamilyStatuses: CreateMedicalConditionFamilyStatuses_createMedicalConditionFamilyStatuses | null;
}

export interface CreateMedicalConditionFamilyStatusesVariables {
  inputs: CreateMedicalConditionFamilyStatusInput[];
}
