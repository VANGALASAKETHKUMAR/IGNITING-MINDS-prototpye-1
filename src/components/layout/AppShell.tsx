import { Link } from "react-router-dom";
import DemoBanner from "@/components/disclosure/DemoBanner";
import LanguageSelector from "@/components/layout/LanguageSelector";
import { useApp } from "@/context/AppContext";

interface AppShellProps {
  children: React.ReactNode;
  showNav?: boolean;
}

export default function AppShell({ children, showNav = true }: AppShellProps) {
  const { isAuthenticated, logout, language } = useApp();
  const fontClass =
    language === "hi" ? "font-hindi" : language === "te" ? "font-telugu" : "";

  return (
    <div className={`min-h-screen bg-canvas ${fontClass}`}>
      <DemoBanner />
      {showNav && (
        <header className="border-b border-border bg-surface/80 backdrop-blur-sm sticky top-0 z-10">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
            <Link
              to={isAuthenticated ? "/dashboard" : "/"}
              className="text-lg font-bold text-primary hover:text-primary-hover"
            >
              Nidhi Guide
            </Link>
            <div className="flex items-center gap-3">
              <LanguageSelector />
              {isAuthenticated && (
                <button
                  type="button"
                  onClick={logout}
                  className="text-sm font-medium text-ink-muted hover:text-ink min-h-[44px] px-2"
                >
                  Exit demo
                </button>
              )}
            </div>
          </div>
        </header>
      )}
      <main className="mx-auto max-w-5xl px-4 py-6 pb-12">{children}</main>
    </div>
  );
}
