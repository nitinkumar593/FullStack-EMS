import { Toaster } from "react-hot-toast";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./Pages/Layout";
import Dashboard from "./Pages/Dashboard";
import Employee from "./Pages/Employee";
import Attendance from "./Pages/Attendance";
import Payslips from "./Pages/Payslips";
import Leave from "./Pages/Leave";
import Settings from "./Pages/Settings";
import LoginLanding from "./Pages/LoginLanding";
import PrintPayslip from "./Pages/PrintPayslip";
import LoginForm from "./Component/LoginForm";

function App() {
  return (
    <>
      <Toaster />

      <Routes>
        <Route path="/login" element={<LoginLanding />} />

        <Route path="/login/admin" element={<LoginForm role="admin" title="Admin Portal" subtitle="Sign in to manage the organization"/>} />
        <Route path="/login/employee" element={<LoginForm role="employee" title="Employee Portal" subtitle="Sign in to access your account"/>} />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/payslips" element={<Payslips />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/print/payslip/:id" element={<PrintPayslip />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />

      </Routes>
    </>
  );
}

export default App;