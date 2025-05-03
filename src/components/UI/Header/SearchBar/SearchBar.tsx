import { FiSearch } from "react-icons/fi";
import { ContainerSearch, SearchInput, SearchIcon } from "./SearchBar.styled";

export function SearchBar() {
  return (
    <ContainerSearch>
      <SearchIcon>
        <FiSearch size={18} />
      </SearchIcon>
      <SearchInput type="text" placeholder="Buscar..." />
    </ContainerSearch>
  );
}
