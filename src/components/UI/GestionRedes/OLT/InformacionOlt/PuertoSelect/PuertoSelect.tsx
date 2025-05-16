import styled from 'styled-components';
interface PuertoSelectProps {
  options?: { id: number; numero: number }[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const PuertoSelect: React.FC<PuertoSelectProps> = ({ options = [], onChange }) => {
  return (
    <SelectContainer>
      <Label>Puerto:</Label>
      <Select onChange={onChange}>
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

const Select = styled.select`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid gray;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;