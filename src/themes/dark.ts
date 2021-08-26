import { DefaultTheme } from "styled-components";

const dark: DefaultTheme = {
  statusBar: "light",
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
      main: "#000000",
      contrastText: "#ffffff",
      highlight: "#303030"
    },
    focusBlock: {
      main: "#303030",
      contrastText: "#ffffff",
    },
    tooltip: {
      main: "#2a2a2a",
      contrastText: "#ffffff",
      highlight: "#505050",
    }
  },
};

export default dark;