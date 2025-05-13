// Sidebar.tsx
import { useState } from "react";
import {
  Container,
  ModuleItem,
  ModuleTitle,
  SubMenu,
  SubItem,
  ModuleHeader,
  IconWrapper,
} from "./Sidebar.styled";
import { modules } from "./modules";
import { useNavigate } from "react-router-dom";

// Dentro del componente Sidebar:


interface SidebarProps {
  expanded: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

export function Sidebar({ expanded, onHoverStart, onHoverEnd }: SidebarProps) {
  const [openModule, setOpenModule] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleModule = (title: string) => {
    setOpenModule((prev) => (prev === title ? null : title));
  };

  return (
    <Container
      $expanded={expanded}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      {modules.map(({ title, icon: Icon, options }) => (
        <ModuleItem
          key={title}
          onMouseEnter={() => setOpenModule(title)}
          onMouseLeave={() => setOpenModule(null)}
          onClick={() => toggleModule(title)}
        >
          <ModuleHeader $expanded={expanded}>
            <IconWrapper $expanded={expanded}>
              <Icon />
            </IconWrapper>
            {expanded && <ModuleTitle $expanded={expanded}>{title}</ModuleTitle>}
          </ModuleHeader>

          {expanded && openModule === title && (
            <SubMenu>
              {options.map(({ name, path }) => (
                <SubItem key={path} onClick={() => navigate(path)}>
                  {name}
                </SubItem>
              ))}
            </SubMenu>
          )}
        </ModuleItem>
      ))}
    </Container>
  );
}
