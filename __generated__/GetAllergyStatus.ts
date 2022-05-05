/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllergyStatus
// ====================================================

export interface GetAllergyStatus_node_Allergy {
  __typename: "Allergy" | "AlternativeMedicine" | "MedicalCondition" | "Medication" | "MKGQuestion" | "MedNode" | "NodeType" | "MKGAnswerToValue" | "MKGUnitType" | "PresentingComplaint" | "Surgery" | "SurgeryStatus" | "MedicalProfile" | "SensitiveProfile" | "MedicareCard" | "GeneralProfile" | "NotificationSetting" | "PushNotification" | "TextNotification" | "EmailNotification" | "Vaccination" | "MedicationStatus" | "AlternativeMedicineStatus" | "AllergyStatus" | "MedicalConditionStatus" | "MedicalConditionFamilyStatus" | "SurgeryToMedicalCondition" | "Family" | "MKGQuestionToPresetQuestionGroup" | "PresetQuestionGroup";
}

export interface GetAllergyStatus_node_User_medicalProfile_allergyStatus_allergy {
  __typename: "Allergy";
  id: string;
  name: string;
}

export interface GetAllergyStatus_node_User_medicalProfile_allergyStatus {
  __typename: "AllergyStatus";
  allergy: GetAllergyStatus_node_User_medicalProfile_allergyStatus_allergy;
  reactions: string[];
  hadAnaphylaxis: boolean;
}

export interface GetAllergyStatus_node_User_medicalProfile {
  __typename: "MedicalProfile";
  allergyStatus: GetAllergyStatus_node_User_medicalProfile_allergyStatus[] | null;
}

export interface GetAllergyStatus_node_User {
  __typename: "User";
  medicalProfile: GetAllergyStatus_node_User_medicalProfile;
}

export type GetAllergyStatus_node = GetAllergyStatus_node_Allergy | GetAllergyStatus_node_User;

export interface GetAllergyStatus {
  node: GetAllergyStatus_node | null;
}
