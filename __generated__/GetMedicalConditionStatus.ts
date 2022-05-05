/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMedicalConditionStatus
// ====================================================

export interface GetMedicalConditionStatus_node_Allergy {
  __typename: "Allergy" | "AlternativeMedicine" | "MedicalCondition" | "Medication" | "MKGQuestion" | "MedNode" | "NodeType" | "MKGAnswerToValue" | "MKGUnitType" | "PresentingComplaint" | "Surgery" | "SurgeryStatus" | "MedicalProfile" | "SensitiveProfile" | "MedicareCard" | "GeneralProfile" | "NotificationSetting" | "PushNotification" | "TextNotification" | "EmailNotification" | "Vaccination" | "MedicationStatus" | "AlternativeMedicineStatus" | "AllergyStatus" | "MedicalConditionStatus" | "MedicalConditionFamilyStatus" | "SurgeryToMedicalCondition" | "Family" | "MKGQuestionToPresetQuestionGroup" | "PresetQuestionGroup";
}

export interface GetMedicalConditionStatus_node_User_medicalProfile_medicalConditionStatus_medicalCondition {
  __typename: "MedicalCondition";
  id: string;
  name: string;
}

export interface GetMedicalConditionStatus_node_User_medicalProfile_medicalConditionStatus {
  __typename: "MedicalConditionStatus";
  diagnosisYear: number | null;
  diagnosisAge: number | null;
  medicalCondition: GetMedicalConditionStatus_node_User_medicalProfile_medicalConditionStatus_medicalCondition;
}

export interface GetMedicalConditionStatus_node_User_medicalProfile {
  __typename: "MedicalProfile";
  medicalConditionStatus: GetMedicalConditionStatus_node_User_medicalProfile_medicalConditionStatus[] | null;
}

export interface GetMedicalConditionStatus_node_User {
  __typename: "User";
  medicalProfile: GetMedicalConditionStatus_node_User_medicalProfile;
}

export type GetMedicalConditionStatus_node = GetMedicalConditionStatus_node_Allergy | GetMedicalConditionStatus_node_User;

export interface GetMedicalConditionStatus {
  node: GetMedicalConditionStatus_node | null;
}
