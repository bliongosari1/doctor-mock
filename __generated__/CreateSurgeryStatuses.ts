/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CustomCreateSurgeryStatusInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateSurgeryStatuses
// ====================================================

export interface CreateSurgeryStatuses_createSurgeryStatuses_surgeryStatuses_medicalProfile {
  __typename: "MedicalProfile";
  id: string;
}

export interface CreateSurgeryStatuses_createSurgeryStatuses_surgeryStatuses_surgery {
  __typename: "Surgery";
  id: string;
}

export interface CreateSurgeryStatuses_createSurgeryStatuses_surgeryStatuses_surgeryToMedicalConditions_surgery {
  __typename: "Surgery";
  id: string;
}

export interface CreateSurgeryStatuses_createSurgeryStatuses_surgeryStatuses_surgeryToMedicalConditions_medicalProfile {
  __typename: "MedicalProfile";
  id: string;
}

export interface CreateSurgeryStatuses_createSurgeryStatuses_surgeryStatuses_surgeryToMedicalConditions {
  __typename: "SurgeryToMedicalCondition";
  id: string;
  surgery: CreateSurgeryStatuses_createSurgeryStatuses_surgeryStatuses_surgeryToMedicalConditions_surgery;
  medicalProfile: CreateSurgeryStatuses_createSurgeryStatuses_surgeryStatuses_surgeryToMedicalConditions_medicalProfile;
}

export interface CreateSurgeryStatuses_createSurgeryStatuses_surgeryStatuses {
  __typename: "SurgeryStatus";
  id: string;
  createdAt: any;
  modifiedAt: any;
  medicalProfile: CreateSurgeryStatuses_createSurgeryStatuses_surgeryStatuses_medicalProfile;
  additionalInformation: string;
  surgery: CreateSurgeryStatuses_createSurgeryStatuses_surgeryStatuses_surgery;
  isElective: boolean;
  surgeryToMedicalConditions: CreateSurgeryStatuses_createSurgeryStatuses_surgeryStatuses_surgeryToMedicalConditions[];
}

export interface CreateSurgeryStatuses_createSurgeryStatuses {
  __typename: "CreateSurgeryStatusesPayload";
  surgeryStatuses: CreateSurgeryStatuses_createSurgeryStatuses_surgeryStatuses[];
}

export interface CreateSurgeryStatuses {
  createSurgeryStatuses: CreateSurgeryStatuses_createSurgeryStatuses | null;
}

export interface CreateSurgeryStatusesVariables {
  inputs: CustomCreateSurgeryStatusInput[];
}
