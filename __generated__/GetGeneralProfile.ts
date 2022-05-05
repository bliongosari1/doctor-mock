/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetGeneralProfile
// ====================================================

export interface GetGeneralProfile_node_Allergy {
  __typename: "Allergy" | "AlternativeMedicine" | "MedicalCondition" | "Medication" | "MKGQuestion" | "MedNode" | "NodeType" | "MKGAnswerToValue" | "MKGUnitType" | "PresentingComplaint" | "Surgery" | "SurgeryStatus" | "MedicalProfile" | "SensitiveProfile" | "MedicareCard" | "GeneralProfile" | "NotificationSetting" | "PushNotification" | "TextNotification" | "EmailNotification" | "Vaccination" | "MedicationStatus" | "AlternativeMedicineStatus" | "AllergyStatus" | "MedicalConditionStatus" | "MedicalConditionFamilyStatus" | "SurgeryToMedicalCondition" | "Family" | "MKGQuestionToPresetQuestionGroup" | "PresetQuestionGroup";
}

export interface GetGeneralProfile_node_User_generalProfile {
  __typename: "GeneralProfile";
  weight: number | null;
  height: number | null;
}

export interface GetGeneralProfile_node_User {
  __typename: "User";
  generalProfile: GetGeneralProfile_node_User_generalProfile;
}

export type GetGeneralProfile_node = GetGeneralProfile_node_Allergy | GetGeneralProfile_node_User;

export interface GetGeneralProfile {
  node: GetGeneralProfile_node | null;
}
