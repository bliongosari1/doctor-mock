/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MedicationFrequency } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetAlternativeMedicine
// ====================================================

export interface GetAlternativeMedicine_node_Allergy {
  __typename: "Allergy" | "AlternativeMedicine" | "MedicalCondition" | "Medication" | "MKGQuestion" | "MedNode" | "NodeType" | "MKGAnswerToValue" | "MKGUnitType" | "PresentingComplaint" | "Surgery" | "SurgeryStatus" | "MedicalProfile" | "SensitiveProfile" | "MedicareCard" | "GeneralProfile" | "NotificationSetting" | "PushNotification" | "TextNotification" | "EmailNotification" | "Vaccination" | "MedicationStatus" | "AlternativeMedicineStatus" | "AllergyStatus" | "MedicalConditionStatus" | "MedicalConditionFamilyStatus" | "SurgeryToMedicalCondition" | "Family" | "MKGQuestionToPresetQuestionGroup" | "PresetQuestionGroup";
}

export interface GetAlternativeMedicine_node_User_medicalProfile_alternativeMedicineStatus_alternativeMedicine {
  __typename: "AlternativeMedicine";
  id: string;
  name: string;
}

export interface GetAlternativeMedicine_node_User_medicalProfile_alternativeMedicineStatus {
  __typename: "AlternativeMedicineStatus";
  id: string;
  dosage: number | null;
  frequency: MedicationFrequency | null;
  alternativeMedicine: GetAlternativeMedicine_node_User_medicalProfile_alternativeMedicineStatus_alternativeMedicine;
}

export interface GetAlternativeMedicine_node_User_medicalProfile {
  __typename: "MedicalProfile";
  alternativeMedicineStatus: GetAlternativeMedicine_node_User_medicalProfile_alternativeMedicineStatus[] | null;
}

export interface GetAlternativeMedicine_node_User {
  __typename: "User";
  medicalProfile: GetAlternativeMedicine_node_User_medicalProfile;
}

export type GetAlternativeMedicine_node = GetAlternativeMedicine_node_Allergy | GetAlternativeMedicine_node_User;

export interface GetAlternativeMedicine {
  node: GetAlternativeMedicine_node | null;
}
