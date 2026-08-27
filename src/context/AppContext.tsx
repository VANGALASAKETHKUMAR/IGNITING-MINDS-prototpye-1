import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { initialClaims, PRIMARY_CLAIM_ID, type Claim } from "@/lib/mock/claims";
import { demoUser, type DemoUser } from "@/lib/mock/user";
import type { Language } from "@/lib/ai/types";

const STORAGE_KEY = "nidhi-guide-session";

interface BankCorrection {
  accountNumber: string;
  confirmAccountNumber: string;
  ifsc: string;
}

interface SessionState {
  isAuthenticated: boolean;
  language: Language;
  claims: Claim[];
  actionPlanCompleted: string[];
  bankCorrection: BankCorrection | null;
  hasResubmitted: boolean;
}

interface AppContextValue extends SessionState {
  user: DemoUser;
  primaryClaim: Claim | undefined;
  login: () => void;
  logout: () => void;
  setLanguage: (lang: Language) => void;
  getClaim: (id: string) => Claim | undefined;
  updateClaim: (id: string, updates: Partial<Claim>) => void;
  toggleActionTask: (taskId: string) => void;
  setBankCorrection: (correction: BankCorrection) => void;
  markResubmitted: () => void;
  resetDemo: () => void;
}

const defaultState: SessionState = {
  isAuthenticated: false,
  language: "en",
  claims: initialClaims,
  actionPlanCompleted: [],
  bankCorrection: null,
  hasResubmitted: false,
};

const AppContext = createContext<AppContextValue | null>(null);

function loadSession(): SessionState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw) as SessionState;
    return { ...defaultState, ...parsed, claims: parsed.claims ?? initialClaims };
  } catch {
    return defaultState;
  }
}

function readInitialState(): SessionState {
  if (typeof window === "undefined") return defaultState;
  return loadSession();
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<SessionState>(readInitialState);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const login = useCallback(() => {
    setState((s) => ({ ...s, isAuthenticated: true }));
  }, []);

  const logout = useCallback(() => {
    setState(defaultState);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const setLanguage = useCallback((language: Language) => {
    setState((s) => ({ ...s, language }));
  }, []);

  const getClaim = useCallback(
    (id: string) => state.claims.find((c) => c.id === id),
    [state.claims],
  );

  const updateClaim = useCallback((id: string, updates: Partial<Claim>) => {
    setState((s) => ({
      ...s,
      claims: s.claims.map((c) => (c.id === id ? { ...c, ...updates } : c)),
    }));
  }, []);

  const toggleActionTask = useCallback((taskId: string) => {
    setState((s) => {
      const completed = s.actionPlanCompleted.includes(taskId)
        ? s.actionPlanCompleted.filter((t) => t !== taskId)
        : [...s.actionPlanCompleted, taskId];
      return { ...s, actionPlanCompleted: completed };
    });
  }, []);

  const setBankCorrection = useCallback((correction: BankCorrection) => {
    setState((s) => ({ ...s, bankCorrection: correction }));
  }, []);

  const markResubmitted = useCallback(() => {
    setState((s) => ({
      ...s,
      hasResubmitted: true,
      claims: s.claims.map((c) =>
        c.id === PRIMARY_CLAIM_ID
          ? {
              ...c,
              status: "UNDER_PROCESS",
              stage: "EPFO Processing",
              reasonCode: null,
            }
          : c,
      ),
    }));
  }, []);

  const resetDemo = useCallback(() => {
    setState({ ...defaultState, isAuthenticated: true });
  }, []);

  const primaryClaim = state.claims.find((c) => c.id === PRIMARY_CLAIM_ID);

  const value = useMemo<AppContextValue>(
    () => ({
      ...state,
      user: demoUser,
      primaryClaim,
      login,
      logout,
      setLanguage,
      getClaim,
      updateClaim,
      toggleActionTask,
      setBankCorrection,
      markResubmitted,
      resetDemo,
    }),
    [
      state,
      primaryClaim,
      login,
      logout,
      setLanguage,
      getClaim,
      updateClaim,
      toggleActionTask,
      setBankCorrection,
      markResubmitted,
      resetDemo,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
