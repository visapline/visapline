import styled from "styled-components";

export const ContainerSearch = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  width: 100%;
  max-width: 300px;
  height: 40px;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(200, 210, 230, 0.6);
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.05);
`;

export const SearchIcon = styled.div`
  color: #a0aec0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  flex: 1;
  padding-left: 0.5rem;
  font-size: 14px;
  color: #2d3748;

  &::placeholder {
    color: #a0aec0;
  }
`;
