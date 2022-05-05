/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProceedNextQuestionInput, QUESTION_TYPE } from "./globalTypes";

// ====================================================
// GraphQL query operation: ProceedNextQuestion
// ====================================================

export interface ProceedNextQuestion_proceedNextQuestion_mKGQuestion_mKGAnswers {
  __typename: "MKGAnswer";
  id: string;
  displayAnswer: string | null;
  answerDescription: string | null;
}

export interface ProceedNextQuestion_proceedNextQuestion_mKGQuestion {
  __typename: "MKGQuestion";
  id: string;
  questionType: QUESTION_TYPE;
  displayQuestion: string | null;
  mKGAnswers: ProceedNextQuestion_proceedNextQuestion_mKGQuestion_mKGAnswers[];
}

export interface ProceedNextQuestion_proceedNextQuestion {
  __typename: "MKGNextQuestion";
  mKGQuestion: ProceedNextQuestion_proceedNextQuestion_mKGQuestion;
  index: number;
}

export interface ProceedNextQuestion {
  proceedNextQuestion: ProceedNextQuestion_proceedNextQuestion;
}

export interface ProceedNextQuestionVariables {
  input?: ProceedNextQuestionInput | null;
}
