import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Loginlanding from './pages/Loginlanding';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import Attendance from './pages/Attendance';
import Employee from './pages/Employee';
import Leave from './pages/Leave';
import Payslips from './pages/Payslips';
import Settings from './pages/Settings';
import Printpayalip from './pages/Printpayalip';
import { Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
const App = () => {
  return (

    <>
      <Toaster />
      <Routes>
        <Route path="/login" element={<Loginlanding />} />

        <Route path="/login/admin" element={<LoginForm role="admin"
          tittle="Admin Portal" subtittle="Sign in to manager the organization" />} />
        <Route path="/login/employee" element={<LoginForm role="employee"
          tittle="Employee Portal" subtittle="Sign in to access your account" />} />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/payslips" element={<Payslips />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/print/payalip/:id" element={<Printpayalip />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </>
  )
}

export default App;