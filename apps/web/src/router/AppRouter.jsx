import { BrowserRouter, Route, Routes } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout.jsx";
import AdminLayout from "../layouts/AdminLayout.jsx";

import QuizHome from "../pages/public/QuizHome.jsx";
import QuizQuestion from "../pages/public/QuizQuestion.jsx";
import QuizContact from "../pages/public/QuizContact.jsx";
import QuizConfirmation from "../pages/public/QuizConfirmation.jsx";

import AdminLogin from "../pages/admin/AdminLogin.jsx";
import AdminDashboard from "../pages/admin/AdminDashboard.jsx";
import AdminProspects from "../pages/admin/AdminProspects.jsx";
import AdminProspectDetails from "../pages/admin/AdminProspectDetails.jsx";
import AdminStatistics from "../pages/admin/AdminStatistics.jsx";
import AdminExport from "../pages/admin/AdminExport.jsx";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<QuizHome />} />

          <Route path="/quiz-spm" element={<QuizHome />} />

          <Route
            path="/quiz-spm/questions/:questionNumber"
            element={<QuizQuestion />}
          />

          <Route path="/quiz-spm/contact" element={<QuizContact />} />

          <Route path="/quiz-spm/confirmation" element={<QuizConfirmation />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="login" element={<AdminLogin />} />

          <Route path="dashboard" element={<AdminDashboard />} />

          <Route path="participantes" element={<AdminProspects />} />

          <Route
            path="participantes/:prospectId"
            element={<AdminProspectDetails />}
          />

          <Route path="statistiques" element={<AdminStatistics />} />

          <Route path="export" element={<AdminExport />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
