import styled from "styled-components";

interface TarjetaSelectProps {
  options?: { id: number, referencia: string }[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const TarjetaSelect: React.FC<TarjetaSelectProps> = ({
  options = [],
  onChange,
}) => {
  return (
    <SelectContainer>
      <Label>Tarjeta:</Label>
      <Select onChange={onChange}>
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

const Select = styled.select`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid gray;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;
