import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppProvider } from "@/context/AppContext";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import LandingPage from "@/pages/LandingPage";
import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/DashboardPage";
import ClaimDetailsPage from "@/pages/ClaimDetailsPage";
import ClaimExplainPage from "@/pages/ClaimExplainPage";
import ClaimFixPage from "@/pages/ClaimFixPage";
import ClaimReviewPage from "@/pages/ClaimReviewPage";
import ClaimSuccessPage from "@/pages/ClaimSuccessPage";
import ClaimTrackPage from "@/pages/ClaimTrackPage";
import ClaimNoticePage from "@/pages/ClaimNoticePage";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/claims/:id"
            element={
              <ProtectedRoute>
                <ClaimDetailsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/claims/:id/explain"
            element={
              <ProtectedRoute>
                <ClaimExplainPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/claims/:id/fix"
            element={
              <ProtectedRoute>
                <ClaimFixPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/claims/:id/review"
            element={
              <ProtectedRoute>
                <ClaimReviewPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/claims/:id/success"
            element={
              <ProtectedRoute>
                <ClaimSuccessPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/claims/:id/track"
            element={
              <ProtectedRoute>
                <ClaimTrackPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/claims/:id/notice"
            element={
              <ProtectedRoute>
                <ClaimNoticePage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
