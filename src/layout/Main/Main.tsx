import { useState } from "react";
import { Header } from "../header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { MainContainer, ContentPage } from "./Main.styled";

export function Main({ children }: { children: React.ReactNode }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

  const isSidebarExpanded = !isSidebarCollapsed || isSidebarHovered;

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  return (
    <MainContainer>
      <Header isSidebarOpen={!isSidebarCollapsed} toggleSidebar={toggleSidebar} />
      <ContentPage>
        <Sidebar
          expanded={isSidebarExpanded}
          onHoverStart={() => setIsSidebarHovered(true)}
          onHoverEnd={() => setIsSidebarHovered(false)}
        />
        {children}
      </ContentPage>
    </MainContainer>
  );
}
