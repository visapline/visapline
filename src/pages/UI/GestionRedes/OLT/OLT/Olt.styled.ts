import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: 95vh;
`;
export const ContainerMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 99%;
  height: 95%;
  gap: 20px;
`;

export const Encabezado = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 120px;
  border-radius: 10px;

  position: relative;
  overflow: hidden;

  /* Fondo principal */
  background-color: ${({ theme }) => theme.colors.background2};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

  /* Ondas decorativas a la derecha */
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 30%; /* Ancho de la zona de olas */

    background-size: cover;
    background-position: right center;
    background-repeat: no-repeat;
  }

  label {
    width: 400px;

    display: flex;
    align-items: center;
    margin-left: 20px;
    display: flex;
  }
  /* Contenido de texto */
  h1 {
    font-size: 1.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    max-width: 65%; /* Limita el ancho para no solapar con olas */
    position: relative;
    z-index: 1;
  }
`;

export const Main = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.background2};
  border-radius: 10px;
  align-items: center;
`;

export const HeaderGraficaOlt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 50px;
`;

export const SectionTarjetas = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
`;

export const ContenedorTarjetas = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 90%;
  flex: 1;
  gap: 20px;
  border: 1px solid;
`;
