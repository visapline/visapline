import styled from 'styled-components';
interface PuertoSelectProps {
  options?: { id: number; numero: number }[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
}

export const PuertoSelect: React.FC<PuertoSelectProps> = ({ options = [], onChange,disabled }) => {
  return (
    <SelectContainer>
      <Label>Puerto:</Label>
      <Select onChange={onChange} disabled={disabled}>
        {/* Cambié el valor de la opción por defecto a "" */}
        <option value="">Seleccione</option>
        {options.map((puerto) => (
          <option key={puerto.id} value={puerto.id}>
            {puerto.numero}
          </option>
        ))}
      </Select>
    </SelectContainer>
  );
};

// Reutiliza los mismos estilos
const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Label = styled.label`
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.text};
`;

const Select = styled.select<{ disabled?: boolean }>`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid gray;
  background-color: ${({ theme, disabled }) =>
    disabled ? "#e0e0e0" : theme.colors.background};
  color: ${({ theme, disabled }) =>
    disabled ? "#999999" : theme.colors.text};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

   &:focus {
    outline: none;
    box-shadow: none;
  }
`;