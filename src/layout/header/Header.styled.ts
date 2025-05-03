import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  width: 100vw;
  height: 8vh;
 
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 200px;
  gap: 10px;

  align-items: center;
  height: 8vh;
  background-color: rgba(237, 242, 249, 0.96);

  h1 {
    color: rgba(31, 119, 241, 0.96);
    font-size: 1.5rem;
    font-weight: 800;
  }
`;


export const ContainerSearch = styled.div`
  display: flex;
  width: 50%;
  gap: 10px;
  align-items: center;
  flex: 1;
  height: 8vh;
  background-color: rgba(237, 242, 249, 0.96);
`;