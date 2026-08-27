export type Language = "en" | "hi" | "te";

export type Urgency = "none" | "attention" | "urgent";

export interface ClaimExplanation {
  summary: string;
  whatItMeans: string;
  likelyCause: string;
  actionRequired: boolean;
  actions: string[];
  urgency: Urgency;
  whatNotToDo: string;
  nextStep: string;
}

export interface StageExplanation {
  summary: string;
  whatItMeans: string;
  nextAction: string;
  actionRequired: boolean;
}

export interface DocumentExplanation {
  issuesFound: number;
  issueTitle: string;
  simpleExplanation: string;
  actions: string[];
}

export interface ExplainClaimPayload {
  claimType: string;
  status: string;
  reasonCode: string;
  amount: number;
  language: Language;
}

export interface ExplainStagePayload {
  claimId: string;
  status: string;
  stage: string;
  language: Language;
}
