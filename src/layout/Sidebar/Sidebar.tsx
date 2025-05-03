import { Container } from "./Sidebar.styled";

interface SidebarProps {
  expanded: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

export function Sidebar({ expanded, onHoverStart, onHoverEnd }: SidebarProps) {
  return (
    <Container
      expanded={expanded}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      <h1>Sidebar</h1>
      <p>Contenido del Sidebar</p>
    </Container>
  );
}
