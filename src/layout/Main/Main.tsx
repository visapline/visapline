import { Header } from "../header/Header";
import { MainContainer } from "./Main.styled";
export function Main({ children }: { children: React.ReactNode }) {
  return (
    <MainContainer>
        <Header />
       { children }
    </MainContainer>
  )
}