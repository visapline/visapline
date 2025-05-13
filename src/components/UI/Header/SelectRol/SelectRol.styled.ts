import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  border-radius: 8px;
  font-family: sans-serif;
`;

export const Label = styled.div`
  font-weight: bold;
  color: rgba(31, 119, 241, 0.96);

  span {
    color: rgba(31, 119, 241, 0.96);
    margin-left: 2px;
  }
`;

export const Select = styled.select`
  width: 210px;
  height: 50px;
  border-radius: 6px;
  border: 1px solid rgba(200, 210, 230, 0.6);
  font-size: 14px;
  background-color: rgba(255, 255, 255, 0.96);
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.05);
  cursor: pointer;

  text-align: center;       // centra horizontalmente el texto
  text-align-last: center;  // centra la opción seleccionada (solo en algunos navegadores)

  padding: 0;               // elimina padding extraño que puede descentrar
  line-height: 50px;        // centra verticalmente el texto por altura

  &:focus {
    outline: none;
    border-color: #2b6cb0;
    box-shadow: 0 0 0 2px rgba(43, 108, 176, 0.2);
  }
`;

