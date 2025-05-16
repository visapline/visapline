import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "../layout/Layout";
import {
  Dashboard,
  Ubicaciones,
  Ingresos,
  Clientes,
  Contrato,
  Redes,
  Terceros,
  InformacionOlt,
  Olt
} from "../pages/UI";
// Ejemplo de otra página

export const AppNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Layout como contenedor */}
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="gestioncliente/ubicaciones" element={<Ubicaciones />} />
          <Route path="gestioncliente/clientes" element={<Clientes />} />
          <Route path="vistas/contrato" element={<Contrato />} />
          <Route path="finanzas/ingresos" element={<Ingresos />} />
          <Route path="gestionredes/redes" element={<Redes />} />
          <Route path="gestionterceros/terceros" element={<Terceros />} />
           <Route path="gestionolt/olt" element={<Olt/>} />
          <Route path="gestionolt/informacionolt" element={<InformacionOlt/>} />
        </Route>
      </Routes>
    </Router>
  );
};
