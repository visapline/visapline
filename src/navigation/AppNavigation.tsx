import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Dashboard } from "../pages/UI";
// Ejemplo de otra página

export const AppNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>

          {/* Layout como contenedor */}
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};
