/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum DIAGNOSIS_AGE {
  LESS_THAN_TWENTY = "LESS_THAN_TWENTY",
  MORE_THAN_FIFTY = "MORE_THAN_FIFTY",
  TWENTY_TO_FIFTY = "TWENTY_TO_FIFTY",
}

export enum DRINK_FREQUENCY {
  DAILY = "DAILY",
  EVERY_OTHER_DAY = "EVERY_OTHER_DAY",
  EVERY_OTHER_MONTH = "EVERY_OTHER_MONTH",
  EVERY_OTHER_WEEK = "EVERY_OTHER_WEEK",
}

export enum DRINK_PER_SESSION {
  GREATER_THAN_FOUR = "GREATER_THAN_FOUR",
  ONE_TO_TWO = "ONE_TO_TWO",
  TWO_TO_FOUR = "TWO_TO_FOUR",
}

export enum FAMILY_RELATION {
  BROTHER = "BROTHER",
  DAUGHTER = "DAUGHTER",
  FATHER = "FATHER",
  GRANDFATHER = "GRANDFATHER",
  GRANDMOTHER = "GRANDMOTHER",
  MOTHER = "MOTHER",
  SISTER = "SISTER",
  SON = "SON",
}

export enum HAD_PREGNANCY {
  NO = "NO",
  PREGNANT = "PREGNANT",
  TRYING_PREGNANT = "TRYING_PREGNANT",
  UNSURE = "UNSURE",
  YES = "YES",
}

export enum MKG_SESSION_OTHER_REQUEST {
  ADD_ANOTHER_SYMPTOM = "ADD_ANOTHER_SYMPTOM",
  REQUEST_MEDICAL_CERTIFICATE = "REQUEST_MEDICAL_CERTIFICATE",
  REQUEST_PRESCRIPTION = "REQUEST_PRESCRIPTION",
}

export enum MKG_SESSION_REASONS {
  CONTRACEPTION = "CONTRACEPTION",
  FAMILY_PLANNING = "FAMILY_PLANNING",
  MEDICAL_CERTIFICATE = "MEDICAL_CERTIFICATE",
  NEW_SYMPTOMS = "NEW_SYMPTOMS",
  REPEAT_PRESCRIPTION = "REPEAT_PRESCRIPTION",
  SEXUAL_HEALTH = "SEXUAL_HEALTH",
  SPECIALIST_REFERRAL = "SPECIALIST_REFERRAL",
  TRAVEL_MEDICINE = "TRAVEL_MEDICINE",
}

export enum MedicationFrequency {
  DAILY = "DAILY",
  MONTHLY = "MONTHLY",
  QUARTERLY = "QUARTERLY",
  WEEKLY = "WEEKLY",
  YEARLY = "YEARLY",
}

export enum QUESTION_TYPE {
  DATE_SELECT = "DATE_SELECT",
  IMAGE_SELECT = "IMAGE_SELECT",
  LOCATION_SELECT = "LOCATION_SELECT",
  MULTISELECT = "MULTISELECT",
  SINGLE_SELECT = "SINGLE_SELECT",
  SLIDER = "SLIDER",
}

export enum SEXUAL_ACTIVE {
  NO = "NO",
  YES = "YES",
}

export enum SMOKE_AMOUNT {
  HALF_DAILY = "HALF_DAILY",
  LESS_THAN_QUARTER_DAILY = "LESS_THAN_QUARTER_DAILY",
  QUARTER_DAILY = "QUARTER_DAILY",
  THREE_QUARTER_DAILY = "THREE_QUARTER_DAILY",
}

export enum SMOKE_STATUS {
  NO = "NO",
  USED_TO_BE = "USED_TO_BE",
  YES = "YES",
}

export enum WANT_REDUCE_DRINK {
  NO = "NO",
  UNSURE = "UNSURE",
  YES = "YES",
}

export interface CreateAllergyStatusInput {
  allergyID: string;
  reactions?: string[] | null;
  hadAnaphylaxis?: boolean | null;
}

export interface CreateMKGSessionInput {
  presentingComplaintIDs?: string[] | null;
  reasons?: MKG_SESSION_REASONS[] | null;
}

export interface CreateMedicalConditionFamilyStatusInput {
  medicalConditionID: string;
  familyMemberStatuses: FamilyMemberStatusInput[];
}

export interface CreateMedicationStatusInput {
  medicationID?: string | null;
  dosage?: number | null;
  frequency?: MedicationFrequency | null;
}

export interface CustomCreateSurgeryStatusInput {
  surgeryID: string;
  date: any;
  additionalInformation: string;
  isElective: boolean;
  medicalConditionIDs: string[];
}

export interface FamilyMemberStatusInput {
  relation: FAMILY_RELATION;
  diagnosisAge: DIAGNOSIS_AGE;
}

export interface ProceedNextQuestionInput {
  mKGSessionUUID: string;
  currentIndex: number;
}

export interface SubmitSessionInput {
  mKGSessionUUID: string;
  additionalInfo?: string | null;
  otherRequests?: MKG_SESSION_OTHER_REQUEST[] | null;
}

export interface SubmitSessionQuestionInput {
  mKGSessionUUID: string;
  mKGQuestionID: string;
  currentIndex: number;
  inputValue?: string | null;
  selectedAnswerIDs?: string[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
