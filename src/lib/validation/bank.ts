export function validateAccountNumber(value: string): string | null {
  if (!value.trim()) return "Account number is required.";
  if (!/^\d{9,18}$/.test(value.trim())) {
    return "Enter a valid demo account number (9–18 digits).";
  }
  return null;
}

export function validateIfsc(value: string): string | null {
  if (!value.trim()) return "IFSC code is required.";
  if (!/^[A-Z]{4}0[A-Z0-9]{6}$/i.test(value.trim())) {
    return "Enter a valid IFSC format (e.g. SBIN0001234).";
  }
  return null;
}

export function validateAccountMatch(
  account: string,
  confirm: string,
): string | null {
  if (!confirm.trim()) return "Please confirm your account number.";
  if (account.trim() !== confirm.trim()) {
    return "Account numbers don't match. Please check both fields.";
  }
  return null;
}
