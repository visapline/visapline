// styles/theme.ts

import type { ThemeType } from "../types/theme";

export const lightTheme: ThemeType = {
  colors: {
    background: "rgba(237, 242, 249, 0.96)", // fondo verdadero claro
    background2: "rgba(255, 255, 255, 0.96)", // fondo blanco translúcido
    text: "#5e6e82",       // gris oscuro
    primary: "#3182ce",    // azul principal
    secondary: "#2D3748",  // gris más oscuro
    hovertext: "#1d232a",  // blanco grisáceo
  },
  fonts: {
    primary: "Arial, sans-serif",
    secondary: "Courier New, monospace",
  },
};

export const darkTheme: ThemeType = {
  colors: {
    background: "rgba(11, 23, 39, 0.96)", // puedes usar otro rgba si quieres fondo oscuro translúcido
    background2: "rgba(11, 23, 39, 0.96)", // fondo oscuro translúcido
    text: "#EDF2F7",       // blanco grisáceo
    primary: "#63b3ed",    // azul claro
    secondary: "#A0AEC0",  // gris claro
    hovertext: "#2D3748",  // gris más oscuro
  },
  fonts: {
    primary: "Arial, sans-serif",
    secondary: "Courier New, monospace",
  },
};
