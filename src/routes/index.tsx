import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default RoutesMain;
