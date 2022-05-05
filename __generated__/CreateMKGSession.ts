/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateMKGSessionInput, MKG_SESSION_REASONS } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateMKGSession
// ====================================================

export interface CreateMKGSession_createMKGSession {
  __typename: "MKGSession";
  uuid: string;
  userID: string;
  /**
   * reasons for attending this MKG session
   */
  reasons: MKG_SESSION_REASONS[] | null;
}

export interface CreateMKGSession {
  createMKGSession: CreateMKGSession_createMKGSession;
}

export interface CreateMKGSessionVariables {
  input?: CreateMKGSessionInput | null;
}
