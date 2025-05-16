import styled from 'styled-components';

export const ConsultaButton = () => {
  return (
    <ButtonContainer>
      <Button type="button">Consulta</Button>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 30px;

  height: 30px;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
    width: 100px;

`;