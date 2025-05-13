import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  font-family: sans-serif;
  background-color: transparent;

`;

export const DropdownButton = styled.button`
  border: none;
  height: 50px;
  width: 80px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: rgba(237, 242, 249, 0.96) !important;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 110%;
  right: 0;
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  z-index: 1000;
  min-width: 120px;
`;

export const DropdownItem = styled.div`
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  cursor: pointer;
  color: #1a202c;

  &:hover {
    background-color: #f1f5f9;
  }
`;

export const Icon = styled.span`
  display: flex;
  align-items: center;
`;

export const Checkmark = styled.span`
  margin-left: auto;
  color: #4a90e2;
`;
