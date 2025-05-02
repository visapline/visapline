import { Container } from "./Layout.styled";
import { Outlet } from "react-router-dom";
import { Main } from "./Main/Main";
import { Sidebar } from "./Sidebar/Sidebar";

export function Layout() {
  return (
    <Container>

      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
}
