import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Register } from "../pages/Auth";

export const AuthNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

