import styled from "styled-components";

export const ButtonOpenSidebarContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(200, 210, 230, 1); /* más oscuro al hacer hover */
  }

  svg {
    pointer-events: none; /* para que hover lo detecte en el contenedor */
  }
`;

