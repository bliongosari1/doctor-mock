/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DRINK_FREQUENCY, DRINK_PER_SESSION, WANT_REDUCE_DRINK } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetDrink
// ====================================================

export interface GetDrink_node_Allergy {
  __typename: "Allergy" | "AlternativeMedicine" | "MedicalCondition" | "Medication" | "MKGQuestion" | "MedNode" | "NodeType" | "MKGAnswerToValue" | "MKGUnitType" | "PresentingComplaint" | "Surgery" | "SurgeryStatus" | "MedicalProfile" | "SensitiveProfile" | "MedicareCard" | "GeneralProfile" | "NotificationSetting" | "PushNotification" | "TextNotification" | "EmailNotification" | "Vaccination" | "MedicationStatus" | "AlternativeMedicineStatus" | "AllergyStatus" | "MedicalConditionStatus" | "MedicalConditionFamilyStatus" | "SurgeryToMedicalCondition" | "Family" | "MKGQuestionToPresetQuestionGroup" | "PresetQuestionGroup";
}

export interface GetDrink_node_User_medicalProfile {
  __typename: "MedicalProfile";
  drinkFrequency: DRINK_FREQUENCY | null;
  drinkPerSession: DRINK_PER_SESSION | null;
  wantReduceDrink: WANT_REDUCE_DRINK | null;
}

export interface GetDrink_node_User {
  __typename: "User";
  medicalProfile: GetDrink_node_User_medicalProfile;
}

export type GetDrink_node = GetDrink_node_Allergy | GetDrink_node_User;

export interface GetDrink {
  node: GetDrink_node | null;
}
