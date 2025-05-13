// styles/styled.d.ts
import "styled-components";
import type { ThemeType } from "../types/theme";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}