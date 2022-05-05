/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMedicalProfile
// ====================================================

export interface GetMedicalProfile_node_Allergy {
  __typename: "Allergy" | "AlternativeMedicine" | "MedicalCondition" | "Medication" | "MKGQuestion" | "MedNode" | "NodeType" | "MKGAnswerToValue" | "MKGUnitType" | "PresentingComplaint" | "Surgery" | "SurgeryStatus" | "MedicalProfile" | "SensitiveProfile" | "MedicareCard" | "GeneralProfile" | "NotificationSetting" | "PushNotification" | "TextNotification" | "EmailNotification" | "Vaccination" | "MedicationStatus" | "AlternativeMedicineStatus" | "AllergyStatus" | "MedicalConditionStatus" | "MedicalConditionFamilyStatus" | "SurgeryToMedicalCondition" | "Family" | "MKGQuestionToPresetQuestionGroup" | "PresetQuestionGroup";
}

export interface GetMedicalProfile_node_User_medicalProfile_medicalConditionStatus_medicalCondition {
  __typename: "MedicalCondition";
  id: string;
  name: string;
}

export interface GetMedicalProfile_node_User_medicalProfile_medicalConditionStatus {
  __typename: "MedicalConditionStatus";
  diagnosisYear: number | null;
  diagnosisAge: number | null;
  medicalCondition: GetMedicalProfile_node_User_medicalProfile_medicalConditionStatus_medicalCondition;
}

export interface GetMedicalProfile_node_User_medicalProfile_medicationStatus_medication {
  __typename: "Medication";
  id: string;
  name: string;
}

export interface GetMedicalProfile_node_User_medicalProfile_medicationStatus {
  __typename: "MedicationStatus";
  id: string;
  medication: GetMedicalProfile_node_User_medicalProfile_medicationStatus_medication;
}

export interface GetMedicalProfile_node_User_medicalProfile {
  __typename: "MedicalProfile";
  medicalConditionStatus: GetMedicalProfile_node_User_medicalProfile_medicalConditionStatus[] | null;
  medicationStatus: GetMedicalProfile_node_User_medicalProfile_medicationStatus[] | null;
}

export interface GetMedicalProfile_node_User {
  __typename: "User";
  medicalProfile: GetMedicalProfile_node_User_medicalProfile;
}

export type GetMedicalProfile_node = GetMedicalProfile_node_Allergy | GetMedicalProfile_node_User;

export interface GetMedicalProfile {
  node: GetMedicalProfile_node | null;
}
