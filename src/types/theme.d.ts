import "styled-components/native";

interface iPalette {
  main: string;
  contrastText: string;
  highlight?: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    statusBar: "light" | "dark";
    palette: {
      primary: iPalette;
      secondary: iPalette;
      background: iPalette;
      focusBlock: iPalette;
    };
  }
}