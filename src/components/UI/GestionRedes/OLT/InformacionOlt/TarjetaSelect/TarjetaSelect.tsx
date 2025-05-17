import styled from "styled-components";

interface TarjetaSelectProps {
  options?: { id: number, referencia: string }[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled ?: boolean;
}

export const TarjetaSelect: React.FC<TarjetaSelectProps> = ({
  options = [],
  onChange,
  disabled 
}) => {
  return (
    <SelectContainer>
      <Label>Tarjeta:</Label>
      <Select onChange={onChange} disabled={disabled}>
        <option value="">Seleccione</option>
        {options.map((tarjeta) => (
          <option key={tarjeta.id} value={tarjeta.id}>
            {tarjeta.referencia}
          </option>
        ))}
      </Select>
    </SelectContainer>
  );
};

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
