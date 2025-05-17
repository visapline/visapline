// src/components/UI/GestionRedes/OLT/InformacionOlt/ConsultaButton.tsx
import styled from 'styled-components';

interface ConsultaButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

export const ConsultaButton: React.FC<ConsultaButtonProps> = ({ onClick, disabled }) => {
  return (
    <ButtonContainer>
      <Button type="button" onClick={onClick} disabled={disabled}>
        Consulta
      </Button>
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
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};


`;
