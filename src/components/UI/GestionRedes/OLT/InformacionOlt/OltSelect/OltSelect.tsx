import styled from "styled-components";
import { OltDto } from "../../../../../../types/olt";

interface Props {
  options: OltDto[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const OltSelect: React.FC<Props> = ({ options = [], onChange }) => {
  return (
    <SelectContainer>
      <Label>OLT:</Label>
      <Select onChange={onChange}>
        <option value="">Seleccione</option>
        {options.map((olt) => (
          <option key={olt.id} value={olt.id}>
            {olt.nombre}
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

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
