// Sidebar.styled.ts
import styled, { keyframes } from "styled-components";

interface Props {
  $expanded: boolean;
}

// 🔄 Animación para mostrar el submenú (despliegue suave)
const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div<Props>`
  width: ${({ $expanded }) => ($expanded ? "16vw" : "4vw")};
  height: 100vh;
  transition: width 0.3s ease;
  color: white;
  overflow: hidden;

`;

export const ModuleItem = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  transition: color 0.2s ease;

  &:hover {
    color:${({ theme }) => theme.colors.hovertext}; /* color más claro al pasar mouse */
  }
`;

export const ModuleTitle = styled.div<Props>`
  font-size: ${({ $expanded }) => ($expanded ? "1rem" : "0.75rem")};
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.3s ease;
`;

export const SubMenu = styled.div`
  margin-left: 1rem;
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  animation: ${slideDown} 0.3s ease forwards;
`;

export const SubItem = styled.div`
  font-size: 0.9rem;
  padding: 0.3rem 0;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color:${({ theme }) => theme.colors.hovertext};
  }
`;

export const ModuleHeader = styled.div<Props>`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  height: 2rem;
  justify-content: ${({ $expanded }) => ($expanded ? "flex-start" : "center")};
`;


export const IconWrapper = styled.div<Props>`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 1.5rem;
  margin-left: ${({ $expanded }) => ($expanded ? "1rem" : "0")};
`;

