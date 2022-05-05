/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SubmitSessionInput, MKG_SESSION_REASONS } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SubmitSession
// ====================================================

export interface SubmitSession_submitSession {
  __typename: "MKGSession";
  uuid: string;
  /**
   * reasons for attending this MKG session
   */
  reasons: MKG_SESSION_REASONS[] | null;
  presentingComplaintIDs: string[] | null;
  userID: string;
  questionHistory: any | null;
  additionalInfo: string | null;
  isCompleted: boolean | null;
}

export interface SubmitSession {
  submitSession: SubmitSession_submitSession;
}

export interface SubmitSessionVariables {
  input: SubmitSessionInput;
}
