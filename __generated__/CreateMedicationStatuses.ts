/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateMedicationStatusInput, MedicationFrequency } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateMedicationStatuses
// ====================================================

export interface CreateMedicationStatuses_createMedicationStatuses_medicationStatuses_medication {
  __typename: "Medication";
  id: string;
}

export interface CreateMedicationStatuses_createMedicationStatuses_medicationStatuses {
  __typename: "MedicationStatus";
  dosage: number | null;
  frequency: MedicationFrequency | null;
  medication: CreateMedicationStatuses_createMedicationStatuses_medicationStatuses_medication;
}

export interface CreateMedicationStatuses_createMedicationStatuses {
  __typename: "CreateMedicationStatusesPayload";
  medicationStatuses: CreateMedicationStatuses_createMedicationStatuses_medicationStatuses[];
}

export interface CreateMedicationStatuses {
  createMedicationStatuses: CreateMedicationStatuses_createMedicationStatuses | null;
}

export interface CreateMedicationStatusesVariables {
  inputs: CreateMedicationStatusInput[];
}
