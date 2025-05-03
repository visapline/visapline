import styled from "styled-components";

interface Props {
  expanded: boolean;
}

export const Container = styled.div<Props>`
  width: ${({ expanded }) => (expanded ? "10vw" : "3vw")};
  height: 100vh;

  transition: width 0.3s ease;
  overflow: hidden; /* para evitar que el texto se desborde cuando es angosto */
`;
