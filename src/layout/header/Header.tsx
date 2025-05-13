import {
  ButtonOpenSidebar,
  SearchBar,
  SelectRol,
  ThemeSelect,
  UserSelect,
} from "../../components/UI/Header";
import {
  HeaderContainer,
  InfoContainer,
  ContainerSearch,
  ContainerRolHeader,
  ContainerThemeSelect,
  ContainerUserSelect,
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
      <ContainerRolHeader>
        <SelectRol
          value="ADMINISTRADOR"
          onChange={(value) => console.log(value)}
        />
      </ContainerRolHeader>
      <ContainerThemeSelect>
        <ThemeSelect />
      </ContainerThemeSelect>
      <ContainerUserSelect>
        <UserSelect />
      </ContainerUserSelect>
    </HeaderContainer>
  );
}
