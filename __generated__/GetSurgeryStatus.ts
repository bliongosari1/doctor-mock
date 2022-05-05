/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSurgeryStatus
// ====================================================

export interface GetSurgeryStatus_node_Allergy {
  __typename: "Allergy" | "AlternativeMedicine" | "MedicalCondition" | "Medication" | "MKGQuestion" | "MedNode" | "NodeType" | "MKGAnswerToValue" | "MKGUnitType" | "PresentingComplaint" | "Surgery" | "SurgeryStatus" | "MedicalProfile" | "SensitiveProfile" | "MedicareCard" | "GeneralProfile" | "NotificationSetting" | "PushNotification" | "TextNotification" | "EmailNotification" | "Vaccination" | "MedicationStatus" | "AlternativeMedicineStatus" | "AllergyStatus" | "MedicalConditionStatus" | "MedicalConditionFamilyStatus" | "SurgeryToMedicalCondition" | "Family" | "MKGQuestionToPresetQuestionGroup" | "PresetQuestionGroup";
}

export interface GetSurgeryStatus_node_User_medicalProfile_surgeryStatus_surgery {
  __typename: "Surgery";
  id: string;
  name: string;
}

export interface GetSurgeryStatus_node_User_medicalProfile_surgeryStatus_surgeryToMedicalConditions_medicalCondition {
  __typename: "MedicalCondition";
  id: string;
  name: string;
}

export interface GetSurgeryStatus_node_User_medicalProfile_surgeryStatus_surgeryToMedicalConditions {
  __typename: "SurgeryToMedicalCondition";
  medicalCondition: GetSurgeryStatus_node_User_medicalProfile_surgeryStatus_surgeryToMedicalConditions_medicalCondition;
}

export interface GetSurgeryStatus_node_User_medicalProfile_surgeryStatus {
  __typename: "SurgeryStatus";
  date: any;
  additionalInformation: string;
  surgery: GetSurgeryStatus_node_User_medicalProfile_surgeryStatus_surgery;
  isElective: boolean;
  surgeryToMedicalConditions: GetSurgeryStatus_node_User_medicalProfile_surgeryStatus_surgeryToMedicalConditions[];
}

export interface GetSurgeryStatus_node_User_medicalProfile {
  __typename: "MedicalProfile";
  surgeryStatus: GetSurgeryStatus_node_User_medicalProfile_surgeryStatus[] | null;
}

export interface GetSurgeryStatus_node_User {
  __typename: "User";
  medicalProfile: GetSurgeryStatus_node_User_medicalProfile;
}

export type GetSurgeryStatus_node = GetSurgeryStatus_node_Allergy | GetSurgeryStatus_node_User;

export interface GetSurgeryStatus {
  node: GetSurgeryStatus_node | null;
}
