/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SMOKE_AMOUNT, SMOKE_STATUS } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetSmoke
// ====================================================

export interface GetSmoke_node_Allergy {
  __typename: "Allergy" | "AlternativeMedicine" | "MedicalCondition" | "Medication" | "MKGQuestion" | "MedNode" | "NodeType" | "MKGAnswerToValue" | "MKGUnitType" | "PresentingComplaint" | "Surgery" | "SurgeryStatus" | "MedicalProfile" | "SensitiveProfile" | "MedicareCard" | "GeneralProfile" | "NotificationSetting" | "PushNotification" | "TextNotification" | "EmailNotification" | "Vaccination" | "MedicationStatus" | "AlternativeMedicineStatus" | "AllergyStatus" | "MedicalConditionStatus" | "MedicalConditionFamilyStatus" | "SurgeryToMedicalCondition" | "Family" | "MKGQuestionToPresetQuestionGroup" | "PresetQuestionGroup";
}

export interface GetSmoke_node_User_medicalProfile {
  __typename: "MedicalProfile";
  smokeAmount: SMOKE_AMOUNT | null;
  smokeStatus: SMOKE_STATUS | null;
  stopSmokeAge: number | null;
  startSmokeAge: number | null;
}

export interface GetSmoke_node_User {
  __typename: "User";
  medicalProfile: GetSmoke_node_User_medicalProfile;
}

export type GetSmoke_node = GetSmoke_node_Allergy | GetSmoke_node_User;

export interface GetSmoke {
  node: GetSmoke_node | null;
}
