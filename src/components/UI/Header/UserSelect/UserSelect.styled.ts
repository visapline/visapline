import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;

`;

export const DropdownButton = styled.button`

  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  border-radius: 50%;

`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #1e88e5;
  background-image: url("data:image/svg+xml,%3Csvg fill='white' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 12c2.7 0 4.7-2 4.7-4.7S14.7 2.6 12 2.6 7.3 4.6 7.3 7.3 9.3 12 12 12Zm0 2.4c-3.1 0-9.3 1.6-9.3 4.7v1.3h18.6v-1.3c0-3.1-6.2-4.7-9.3-4.7Z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 60%;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  top: 110%;
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  z-index: 1000;
  min-width: 150px;
`;

export const DropdownItem = styled.div`
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: #1a202c;

  &:hover {
    background-color: #f1f5f9;
  }
`;
