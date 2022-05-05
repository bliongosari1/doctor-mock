/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateAllergyStatusInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateAllergyStatuses
// ====================================================

export interface CreateAllergyStatuses_createAllergyStatuses_allergyStatuses_allergy {
  __typename: "Allergy";
  id: string;
  name: string;
}

export interface CreateAllergyStatuses_createAllergyStatuses_allergyStatuses {
  __typename: "AllergyStatus";
  id: string;
  reactions: string[];
  hadAnaphylaxis: boolean;
  allergy: CreateAllergyStatuses_createAllergyStatuses_allergyStatuses_allergy;
}

export interface CreateAllergyStatuses_createAllergyStatuses {
  __typename: "CreateAllergyStatusesPayload";
  allergyStatuses: CreateAllergyStatuses_createAllergyStatuses_allergyStatuses[];
}

export interface CreateAllergyStatuses {
  createAllergyStatuses: CreateAllergyStatuses_createAllergyStatuses | null;
}

export interface CreateAllergyStatusesVariables {
  inputs: CreateAllergyStatusInput[];
}
