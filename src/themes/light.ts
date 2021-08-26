import { DefaultTheme } from "styled-components";

const light: DefaultTheme = {
  statusBar: "dark",
  palette: {
    primary: {
      main: "#9060d0",
      contrastText: "#000000",
    },
    secondary: {
      main: "#6030a0",
      contrastText: "#ffffff",
    },
    background: {
      main: "#e0e0e0",
      contrastText: "#000000",
      highlight: "#d0d0d0"
    },
    focusBlock: {
      main: "#ffffff",
      contrastText: "#000000",
    },
    tooltip: {
      main: "#ffffff",
      contrastText: "#000000",
      highlight: "#d0d0d0",
    }
  },
};

export default light;