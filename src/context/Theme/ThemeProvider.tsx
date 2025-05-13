import { ThemeContext } from "./ThemeContext";
import { lightTheme, darkTheme } from "../../styles/theme";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { useState, useEffect } from "react";

type ThemeOption = "light" | "dark" | "auto";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeName, setThemeName] = useState<ThemeOption>("auto");

  const getSystemTheme = (): ThemeOption =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const computedTheme = themeName === "auto" ? getSystemTheme() : themeName;
  const theme = computedTheme === "dark" ? darkTheme : lightTheme;

  // Detecta cambios en el sistema si está en "auto"
  useEffect(() => {
    if (themeName !== "auto") return;

    const listener = () => {
        setThemeName("auto"); // forza re-render
      };
      

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", listener);

    return () => mediaQuery.removeEventListener("change", listener);
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ theme, themeName, setThemeName }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
