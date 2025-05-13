import { FiUsers, FiBarChart2, FiDollarSign } from "react-icons/fi";
import { FaHouseSignal, FaUsers } from "react-icons/fa6";
import { IconType } from "react-icons";

export interface Module {
  title: string;
  icon: IconType;
  options: { name: string; path: string }[];
}

export interface ModuleSection {
  label: string; // nombre real de la sección
  modules: Module[];
}

export const moduleSections: ModuleSection[] = [
  {
    label: "Principal",
    modules: [
      {
        title: "Dashboard",
        icon: FiBarChart2,
        options: [{ name: "Dashboard", path: "/dashboard" }],
      },
    ],
  },
  {
    label: "Gestión de Clientes",
    modules: [
      {
        title: "Gestión Cliente",
        icon: FiUsers,
        options: [
          { name: "Ubicaciones", path: "/gestioncliente/ubicaciones" },
          { name: "Clientes", path: "/gestioncliente/clientes" },
        ],
      },
    ],
  },
  {
    label: "Análisis y Reportes",
    modules: [
      {
        title: "Vistas Avanzadas",
        icon: FiBarChart2,
        options: [{ name: "Contrato", path: "/vistas/contrato" }],
      },
    ],
  },
  {
    label: "Finanzas",
    modules: [
      {
        title: "Finanzas",
        icon: FiDollarSign,
        options: [{ name: "Ingresos", path: "/finanzas/ingresos" }],
      },
    ],
  },
  {
    label: "Infraestructura",
    modules: [
      {
        title: "Gestión Redes",
        icon: FaHouseSignal,
        options: [{ name: "Redes", path: "/gestionredes/redes" }],
      },
    ],
  },
  {
    label: "Terceros",
    modules: [
      {
        title: "Gestión Terceros",
        icon: FaUsers,
        options: [{ name: "Terceros", path: "/gestionterceros/terceros" }],
      },
    ],
  },
];
