import { Container } from "./Layout.styled";
import { Outlet } from "react-router-dom";
import { Main } from "./Main/Main";


export function Layout() {
  return (
    <Container>

      <Main>
        <Outlet />
      </Main>
    </Container>
  );
}
