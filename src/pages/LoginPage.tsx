import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppShell from "@/components/layout/AppShell";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { useApp } from "@/context/AppContext";

export default function LoginPage() {
  const { login, user } = useApp();
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleDemoLogin = () => {
    login();
    navigate("/dashboard");
  };

  const handleManualLogin = () => {
    if (mobile === user.mobile && password === user.password) {
      login();
      navigate("/dashboard");
      return;
    }
    setError("Use the demo credentials shown below, or continue with the demo account.");
  };

  return (
    <AppShell showNav={false}>
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-ink">Demo login</h1>
        <p className="mt-2 text-ink-muted">
          No real authentication. Enter with synthetic demo data instantly.
        </p>

        <Card className="mt-6">
          <p className="text-sm text-ink-muted">Demo user</p>
          <p className="text-xl font-bold text-ink mt-1">{user.name}</p>
          <p className="text-sm text-ink-muted mt-1">
            Private-sector employee · Age {user.age}
          </p>

          <button
            type="button"
            className="mt-5 w-full rounded-xl bg-primary text-white py-3.5 text-base font-semibold min-h-[52px] hover:bg-primary-hover border border-primary shadow-sm"
            onClick={handleDemoLogin}
          >
            Continue with Demo Account
          </button>
        </Card>

        <Card className="mt-4">
          <h2 className="font-semibold text-ink">Optional fallback login</h2>
          <div className="mt-4 space-y-3">
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-ink mb-1">
                Demo mobile
              </label>
              <input
                id="mobile"
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="9876543210"
                className="w-full rounded-xl border border-border px-4 py-3 min-h-[48px]"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-ink mb-1">
                Demo password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="demo123"
                className="w-full rounded-xl border border-border px-4 py-3 min-h-[48px]"
              />
            </div>
            {error && (
              <p className="text-sm text-error" role="alert">{error}</p>
            )}
            <Button variant="secondary" fullWidth onClick={handleManualLogin}>
              Sign in with demo credentials
            </Button>
          </div>
          <p className="mt-3 text-xs text-ink-subtle">
            Synthetic credentials: {user.mobile} / {user.password}
          </p>
        </Card>
      </div>
    </AppShell>
  );
}
