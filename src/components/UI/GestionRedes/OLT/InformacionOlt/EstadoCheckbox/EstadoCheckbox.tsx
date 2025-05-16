import styled from 'styled-components';

export const EstadoCheckbox = () => {
  return (
    <CheckboxGroup>
      <CheckboxLabel>
        <CheckboxInput type="checkbox" name="consultaPor" value="puertos" />
        Por Puertos
      </CheckboxLabel>
      <CheckboxLabel>
        <CheckboxInput type="checkbox" name="consultaPor" value="tarjeta" />
        Por Tarjeta
      </CheckboxLabel>
      <CheckboxLabel>
        <CheckboxInput type="checkbox" name="consultaPor" value="estado" />
        Por Estado
      </CheckboxLabel>
    </CheckboxGroup>
  );
};

const CheckboxGroup = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.colors.text};
`;

const CheckboxInput = styled.input`
  margin: 0;
`;