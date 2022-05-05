/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MedicationFrequency } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetMedicationStatus
// ====================================================

export interface GetMedicationStatus_node_Allergy {
  __typename: "Allergy" | "AlternativeMedicine" | "MedicalCondition" | "Medication" | "MKGQuestion" | "MedNode" | "NodeType" | "MKGAnswerToValue" | "MKGUnitType" | "PresentingComplaint" | "Surgery" | "SurgeryStatus" | "MedicalProfile" | "SensitiveProfile" | "MedicareCard" | "GeneralProfile" | "NotificationSetting" | "PushNotification" | "TextNotification" | "EmailNotification" | "Vaccination" | "MedicationStatus" | "AlternativeMedicineStatus" | "AllergyStatus" | "MedicalConditionStatus" | "MedicalConditionFamilyStatus" | "SurgeryToMedicalCondition" | "Family" | "MKGQuestionToPresetQuestionGroup" | "PresetQuestionGroup";
}

export interface GetMedicationStatus_node_User_medicalProfile_medicationStatus_medication {
  __typename: "Medication";
  id: string;
  name: string;
}

export interface GetMedicationStatus_node_User_medicalProfile_medicationStatus {
  __typename: "MedicationStatus";
  id: string;
  dosage: number | null;
  frequency: MedicationFrequency | null;
  medication: GetMedicationStatus_node_User_medicalProfile_medicationStatus_medication;
}

export interface GetMedicationStatus_node_User_medicalProfile {
  __typename: "MedicalProfile";
  medicationStatus: GetMedicationStatus_node_User_medicalProfile_medicationStatus[] | null;
}

export interface GetMedicationStatus_node_User {
  __typename: "User";
  medicalProfile: GetMedicationStatus_node_User_medicalProfile;
}

export type GetMedicationStatus_node = GetMedicationStatus_node_Allergy | GetMedicationStatus_node_User;

export interface GetMedicationStatus {
  node: GetMedicationStatus_node | null;
}
