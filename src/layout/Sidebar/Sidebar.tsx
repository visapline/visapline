import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  SubContainer,
  ModuleItem,
  ModuleTitle,
  SubMenu,
  SubItem,
  ModuleHeader,
  IconWrapper,
  SectionLabel,
  ChevronIcon,
} from "./Sidebar.styled";
import { moduleSections } from "./modules";

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
      <SubContainer>
        {moduleSections.map(({ label, modules }) => (
          <div key={label}>
            {expanded && <SectionLabel>{label}</SectionLabel>}

            {modules.map(({ title, icon: Icon, options }) => (
              <ModuleItem
                key={title}
                onClick={() => toggleModule(title)} // 👈 Solo clic, sin hover
              >
                <ModuleHeader $expanded={expanded}>
                  <IconWrapper $expanded={expanded}>
                    <Icon />
                  </IconWrapper>
                  {expanded && (
                    <>
                      <ModuleTitle $expanded={expanded}>{title}</ModuleTitle>
                      <ChevronIcon $open={openModule === title} />
                    </>
                  )}
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
          </div>
        ))}
      </SubContainer>
    </Container>
  );
}
