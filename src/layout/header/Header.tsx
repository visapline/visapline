import { ButtonOpenSidebar, SearchBar } from "../../components/UI/Header";
import {
  HeaderContainer,
  InfoContainer,
  ContainerSearch,
} from "./Header.styled";
import LogoIcon from "../../assets/icon_kev.png";

interface Props {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export function Header({ isSidebarOpen, toggleSidebar }: Props) {
  return (
    <HeaderContainer>
      <ButtonOpenSidebar onClick={toggleSidebar} isOpen={isSidebarOpen} />
      <InfoContainer>
        <img src={LogoIcon} alt="Logo" width={50} height={50} />
        <h1>Vive</h1>
      </InfoContainer>
      <ContainerSearch>
        <SearchBar />
      </ContainerSearch>

      <p>Contenido del Header</p>
    </HeaderContainer>
  );
}
