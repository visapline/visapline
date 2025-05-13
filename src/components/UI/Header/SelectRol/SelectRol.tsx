import React from 'react';
import { Container, Label, Select } from "./SelectRol.styled";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const SelectRol: React.FC<Props> = ({ value, onChange }) => {
  return (
    <Container>
      <Label>
        Centro de costo: <span>SUCURSAL FLORENCIA</span>
      </Label>
      <Select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="ADMINISTRADOR">ADMINISTRADOR</option>
        <option value="AUX. CONTABLE">AUX. CONTABLE</option>
      </Select>
    </Container>
  );
};
