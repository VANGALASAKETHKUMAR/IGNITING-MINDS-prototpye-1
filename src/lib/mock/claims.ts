export type ClaimStatus =
  | "REJECTED"
  | "UNDER_PROCESS"
  | "COMPLETED"
  | "PENDING";

export type ReasonCode = "BANK_KYC_MISMATCH" | null;

export interface Claim {
  id: string;
  type: string;
  amount?: number;
  submittedAt?: string;
  status: ClaimStatus;
  reasonCode?: ReasonCode;
  stage: string;
  rejectionSummary?: string;
}

export const PRIMARY_CLAIM_ID = "PF2026-1042";

export const initialClaims: Claim[] = [
  {
    id: "PF2026-1042",
    type: "PF Withdrawal",
    amount: 45000,
    submittedAt: "2026-08-18",
    status: "REJECTED",
    reasonCode: "BANK_KYC_MISMATCH",
    stage: "Correction Required",
    rejectionSummary:
      "Your claim could not be processed because the bank information associated with your claim does not match the verified information in the demo record.",
  },
  {
    id: "PF2026-1031",
    type: "PF Transfer",
    status: "UNDER_PROCESS",
    stage: "Employer Verification",
  },
  {
    id: "PF2026-0987",
    type: "PF Withdrawal",
    amount: 25000,
    status: "COMPLETED",
    stage: "Payment Completed",
  },
];

export function getTimelineForClaim(claim: Claim) {
  const base = [
    { id: "submitted", label: "Claim submitted", completed: true },
    { id: "kyc", label: "KYC verification", completed: true },
    { id: "employer", label: "Employer verification", completed: true },
  ];

  if (claim.status === "REJECTED") {
    return [
      ...base,
      { id: "processing", label: "EPFO processing", completed: false, current: false },
      { id: "payment", label: "Payment", completed: false, current: false },
    ];
  }

  if (claim.status === "UNDER_PROCESS") {
    return [
      ...base,
      { id: "processing", label: "EPFO processing", completed: false, current: true },
      { id: "payment", label: "Payment", completed: false, current: false },
    ];
  }

  return [
    ...base,
    { id: "processing", label: "EPFO processing", completed: true, current: false },
    { id: "payment", label: "Payment", completed: true, current: false },
  ];
}
