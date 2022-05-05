/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FAMILY_RELATION, DIAGNOSIS_AGE } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetMedicalConditionFamilyStatus
// ====================================================

export interface GetMedicalConditionFamilyStatus_node_Allergy {
  __typename: "Allergy" | "AlternativeMedicine" | "MedicalCondition" | "Medication" | "MKGQuestion" | "MedNode" | "NodeType" | "MKGAnswerToValue" | "MKGUnitType" | "PresentingComplaint" | "Surgery" | "SurgeryStatus" | "MedicalProfile" | "SensitiveProfile" | "MedicareCard" | "GeneralProfile" | "NotificationSetting" | "PushNotification" | "TextNotification" | "EmailNotification" | "Vaccination" | "MedicationStatus" | "AlternativeMedicineStatus" | "AllergyStatus" | "MedicalConditionStatus" | "MedicalConditionFamilyStatus" | "SurgeryToMedicalCondition" | "Family" | "MKGQuestionToPresetQuestionGroup" | "PresetQuestionGroup";
}

export interface GetMedicalConditionFamilyStatus_node_User_medicalProfile_medicalConditionFamilyStatus_familyMemberStatuses {
  __typename: "FamilyMemberStatus";
  relation: FAMILY_RELATION;
  diagnosisAge: DIAGNOSIS_AGE;
}

export interface GetMedicalConditionFamilyStatus_node_User_medicalProfile_medicalConditionFamilyStatus_medicalCondition {
  __typename: "MedicalCondition";
  id: string;
  name: string;
}

export interface GetMedicalConditionFamilyStatus_node_User_medicalProfile_medicalConditionFamilyStatus {
  __typename: "MedicalConditionFamilyStatus";
  familyMemberStatuses: GetMedicalConditionFamilyStatus_node_User_medicalProfile_medicalConditionFamilyStatus_familyMemberStatuses[];
  medicalCondition: GetMedicalConditionFamilyStatus_node_User_medicalProfile_medicalConditionFamilyStatus_medicalCondition;
}

export interface GetMedicalConditionFamilyStatus_node_User_medicalProfile {
  __typename: "MedicalProfile";
  medicalConditionFamilyStatus: GetMedicalConditionFamilyStatus_node_User_medicalProfile_medicalConditionFamilyStatus[] | null;
}

export interface GetMedicalConditionFamilyStatus_node_User {
  __typename: "User";
  medicalProfile: GetMedicalConditionFamilyStatus_node_User_medicalProfile;
}

export type GetMedicalConditionFamilyStatus_node = GetMedicalConditionFamilyStatus_node_Allergy | GetMedicalConditionFamilyStatus_node_User;

export interface GetMedicalConditionFamilyStatus {
  node: GetMedicalConditionFamilyStatus_node | null;
}
