import { createContext } from "react";
import { lightTheme } from "../../styles/theme";

type ThemeOption = "light" | "dark" | "auto";

export const ThemeContext = createContext<{
    theme: typeof lightTheme;
    themeName: ThemeOption;
    setThemeName: (theme: ThemeOption) => void;
  }>({
    theme: lightTheme,
    themeName: "auto",
    setThemeName: () => {},
  });