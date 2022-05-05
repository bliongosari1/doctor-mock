/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SEXUAL_ACTIVE, HAD_PREGNANCY } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetSex
// ====================================================

export interface GetSex_node_Allergy {
  __typename: "Allergy" | "AlternativeMedicine" | "MedicalCondition" | "Medication" | "MKGQuestion" | "MedNode" | "NodeType" | "MKGAnswerToValue" | "MKGUnitType" | "PresentingComplaint" | "Surgery" | "SurgeryStatus" | "MedicalProfile" | "SensitiveProfile" | "MedicareCard" | "GeneralProfile" | "NotificationSetting" | "PushNotification" | "TextNotification" | "EmailNotification" | "Vaccination" | "MedicationStatus" | "AlternativeMedicineStatus" | "AllergyStatus" | "MedicalConditionStatus" | "MedicalConditionFamilyStatus" | "SurgeryToMedicalCondition" | "Family" | "MKGQuestionToPresetQuestionGroup" | "PresetQuestionGroup";
}

export interface GetSex_node_User_medicalProfile {
  __typename: "MedicalProfile";
  sexualActive: SEXUAL_ACTIVE | null;
  hadPregnancy: HAD_PREGNANCY | null;
  pregnancyCount: number | null;
}

export interface GetSex_node_User {
  __typename: "User";
  medicalProfile: GetSex_node_User_medicalProfile;
}

export type GetSex_node = GetSex_node_Allergy | GetSex_node_User;

export interface GetSex {
  node: GetSex_node | null;
}
