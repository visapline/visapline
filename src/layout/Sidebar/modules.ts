// modules.ts
import { FiUsers, FiBarChart2, FiDollarSign } from "react-icons/fi";
import { FaHouseSignal } from "react-icons/fa6";
import { IconType } from "react-icons";
import { FaUsers } from "react-icons/fa6";

export interface Module {
  title: string;
  icon: IconType;
  options: { name: string; path: string }[];
}

export const modules: Module[] = [
  {
    title: "Dashboard",
    icon: FiBarChart2,
    options: [{ name: "Dashboard", path: "/dashboard" }],
  },
  {
    title: "Gestión Cliente",
    icon: FiUsers,
    options: [
      { name: "Ubicaciones", path: "/gestioncliente/ubicaciones" },
      { name: "Clientes", path: "/gestioncliente/clientes" },
    ],
  },
  {
    title: "Vistas Avanzadas",
    icon: FiBarChart2,
    options: [
      { name: "Contrato", path: "/vistas/contrato" },

    ],
  },
  {
    title: "Finanzas",
    icon: FiDollarSign,
    options: [
      { name: "Ingresos", path: "/finanzas/ingresos" },

    ],
  },
  {
    title: "Gestión Redes",
    icon: FaHouseSignal,
    options: [
      { name: "Redes", path: "/gestionredes/redes" },

    ],
  },
  {
    title: "Gestión Terceros",
    icon: FaUsers,
    options: [
      { name: "Terceros", path: "/gestionterceros/terceros" },

    ],
  },
];
