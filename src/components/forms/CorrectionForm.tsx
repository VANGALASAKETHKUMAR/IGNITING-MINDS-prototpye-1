import { useState, type FormEvent } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { useApp } from "@/context/AppContext";
import {
  validateAccountMatch,
  validateAccountNumber,
  validateIfsc,
} from "@/lib/validation/bank";

interface CorrectionFormProps {
  onSuccess: () => void;
}

export default function CorrectionForm({ onSuccess }: CorrectionFormProps) {
  const { user, setBankCorrection } = useApp();
  const [accountNumber, setAccountNumber] = useState(user.bank.accountNumberDemo);
  const [confirmAccountNumber, setConfirmAccountNumber] = useState(
    user.bank.accountNumberDemo,
  );
  const [ifsc, setIfsc] = useState(user.bank.ifsc);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [verified, setVerified] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    const accountError = validateAccountNumber(accountNumber);
    if (accountError) newErrors.accountNumber = accountError;

    const confirmError = validateAccountMatch(accountNumber, confirmAccountNumber);
    if (confirmError) newErrors.confirmAccountNumber = confirmError;

    const ifscError = validateIfsc(ifsc);
    if (ifscError) newErrors.ifsc = ifscError;

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setBankCorrection({ accountNumber, confirmAccountNumber, ifsc });
    setVerified(true);
  };

  if (verified) {
    return (
      <Card className="border-success/30 bg-success-light">
        <p className="font-semibold text-success flex items-center gap-2">
          ✓ Details verified for this prototype.
        </p>
        <Button fullWidth className="mt-4" onClick={onSuccess}>
          Review correction
        </Button>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <Card>
        <h2 className="text-lg font-bold text-ink">Bank information</h2>
        <dl className="mt-4 space-y-3 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-ink-muted">Account holder</dt>
            <dd className="font-medium text-ink">{user.bank.accountHolder}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-ink-muted">Bank</dt>
            <dd className="font-medium text-ink">{user.bank.bankName}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-ink-muted">Current (demo)</dt>
            <dd className="font-medium text-ink">{user.bank.accountNumberMasked}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-ink-muted">Status</dt>
            <dd className="font-semibold text-warning">⚠️ Mismatch detected</dd>
          </div>
        </dl>

        <div className="mt-5 space-y-4">
          <div>
            <label htmlFor="accountNumber" className="block text-sm font-medium text-ink mb-1.5">
              Demo account number
            </label>
            <input
              id="accountNumber"
              type="text"
              inputMode="numeric"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="w-full rounded-xl border border-border px-4 py-3 min-h-[52px] text-ink bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-invalid={!!errors.accountNumber}
              aria-describedby={errors.accountNumber ? "accountNumber-error" : undefined}
            />
            {errors.accountNumber && (
              <p id="accountNumber-error" className="mt-1.5 text-sm text-error">
                {errors.accountNumber}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmAccountNumber"
              className="block text-sm font-medium text-ink mb-1.5"
            >
              Confirm account number
            </label>
            <input
              id="confirmAccountNumber"
              type="text"
              inputMode="numeric"
              value={confirmAccountNumber}
              onChange={(e) => setConfirmAccountNumber(e.target.value)}
              className="w-full rounded-xl border border-border px-4 py-3 min-h-[52px] text-ink bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-invalid={!!errors.confirmAccountNumber}
              aria-describedby={
                errors.confirmAccountNumber ? "confirmAccountNumber-error" : undefined
              }
            />
            {errors.confirmAccountNumber && (
              <p id="confirmAccountNumber-error" className="mt-1.5 text-sm text-error">
                {errors.confirmAccountNumber}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="ifsc" className="block text-sm font-medium text-ink mb-1.5">
              IFSC code
            </label>
            <input
              id="ifsc"
              type="text"
              value={ifsc}
              onChange={(e) => setIfsc(e.target.value.toUpperCase())}
              className="w-full rounded-xl border border-border px-4 py-3 min-h-[52px] text-ink bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-invalid={!!errors.ifsc}
              aria-describedby={errors.ifsc ? "ifsc-error" : undefined}
            />
            {errors.ifsc && (
              <p id="ifsc-error" className="mt-1.5 text-sm text-error">
                {errors.ifsc}
              </p>
            )}
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-bold text-ink">KYC status</h2>
        <ul className="mt-4 space-y-3">
          <li className="flex justify-between text-sm">
            <span className="text-ink-muted">Aadhaar</span>
            <span className="font-semibold text-success">Verified</span>
          </li>
          <li className="flex justify-between text-sm">
            <span className="text-ink-muted">PAN</span>
            <span className="font-semibold text-success">Verified</span>
          </li>
          <li className="flex justify-between text-sm">
            <span className="text-ink-muted">Bank</span>
            <span className="font-semibold text-warning">Needs correction</span>
          </li>
        </ul>
      </Card>

      <Button type="submit" fullWidth>
        Verify demo details
      </Button>
    </form>
  );
}
