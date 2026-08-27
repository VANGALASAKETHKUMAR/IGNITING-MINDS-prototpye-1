export interface DemoUser {
  id: string;
  name: string;
  age: number;
  occupation: string;
  pfBalance: number;
  mobile: string;
  password: string;
  uan: string;
  kyc: {
    aadhaar: "verified" | "pending";
    pan: "verified" | "pending";
    bank: "verified" | "needs_correction";
  };
  bank: {
    accountHolder: string;
    bankName: string;
    accountNumberMasked: string;
    accountNumberDemo: string;
    ifsc: string;
    hasMismatch: boolean;
  };
}

export const demoUser: DemoUser = {
  id: "demo-ravi",
  name: "Ravi Kumar",
  age: 32,
  occupation: "Private-sector employee",
  pfBalance: 84250,
  mobile: "9876543210",
  password: "demo123",
  uan: "100234567890",
  kyc: {
    aadhaar: "verified",
    pan: "verified",
    bank: "needs_correction",
  },
  bank: {
    accountHolder: "Ravi Kumar",
    bankName: "State Bank of India",
    accountNumberMasked: "XXXX XXXX 4821",
    accountNumberDemo: "123456789012",
    ifsc: "SBIN0001234",
    hasMismatch: true,
  },
};
