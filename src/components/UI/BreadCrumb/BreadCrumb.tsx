import { useLocation } from "react-router-dom";
import styled from "styled-components";

// Diccionario de nombres amigables
const nameMap: Record<string, string> = {
  dashboard: "Inicio",
  gestioncliente: "Gestión Cliente",
  clientes: "Clientes",
  ubicaciones: "Ubicaciones",
  vistas: "Vistas Avanzadas",
  contrato: "Contrato",
  finanzas: "Finanzas",
  ingresos: "Ingresos",
  gestionredes: "Gestión Redes",

  redes: "Redes",
  gestionolt: "Gestión OLT",
  informacionolt: "informacion OLT",
  gestionterceros: "Gestión Terceros",
  terceros: "Terceros",
};

// Convierte un segmento a su nombre amigable
const displayName = (segment: string) =>
  nameMap[segment.toLowerCase()] ||
  segment.charAt(0).toUpperCase() + segment.slice(1);

const BreadcrumbContainer = styled.div`
  padding: 1rem;
  font-size: 0.9rem;
  color: #666;
`;

const Crumb = styled.span`
  &:not(:last-child)::after {
    content: " / ";
    margin: 0 0.25rem;
  }
`;

export const Breadcrumb = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  return (
    <BreadcrumbContainer>
      {pathParts.length === 0 ? (
        <Crumb>Inicio</Crumb>
      ) : (
        pathParts.map((part, index) => (
          <Crumb key={index}>{displayName(part)}</Crumb>
        ))
      )}
    </BreadcrumbContainer>
  );
};
