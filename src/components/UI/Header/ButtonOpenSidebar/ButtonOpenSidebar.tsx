import { ButtonOpenSidebarContainer } from "./ButtonOpenSidebar.styled";
import { FiAlignJustify, FiAlignLeft } from "react-icons/fi";

interface Props {
  onClick: () => void;
  isOpen: boolean;
}

export function ButtonOpenSidebar({ onClick, isOpen }: Props) {
  return (
    <ButtonOpenSidebarContainer onClick={onClick}>
      {isOpen ? <FiAlignLeft size={20} /> : <FiAlignJustify size={20} />}
    </ButtonOpenSidebarContainer>
  );
}
