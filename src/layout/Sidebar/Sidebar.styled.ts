import styled, { keyframes } from "styled-components";
import { FiChevronDown } from "react-icons/fi";

interface Props {
  $expanded: boolean;
}

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
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const SubContainer = styled.div`
  width: 95%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.background2};
  border-radius: 20px;
  padding: 0.3rem 0;
`;

export const SectionLabel = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: #9ca3af;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  

  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background-color: rgba(194, 197, 201, 0.24);
    margin-left: 0.5rem;
  }
`;

export const ModuleItem = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  transition: color 0.2s ease;


  &:hover {
    color: ${({ theme }) => theme.colors.hovertext};
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

export const ModuleTitle = styled.div<Props>`
  font-size: ${({ $expanded }) => ($expanded ? "0.9rem" : "0.75rem")};
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.3s ease;
`;

export const ChevronIcon = styled(FiChevronDown)<{ $open: boolean }>`
  margin-left: auto;
  transition: transform 0.2s ease;
  transform: ${({ $open }) => ($open ? "rotate(180deg)" : "rotate(0deg)")};
  color: #6b7280;
  font-size: 1rem;
`;

export const SubMenu = styled.div`
  margin-top: 0.2rem;
  color: ${({ theme }) => theme.colors.text};
  animation: ${slideDown} 0.3s ease forwards;
`;

export const SubItem = styled.div`
  font-size: 0.8rem;
  padding: 0.3rem 0;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.hovertext};
  }
`;
