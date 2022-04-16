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
      mutedText: "#d0d0d0",
      highlight: "#303030"
    },
    focusBlock: {
      main: "#151415",
      contrastText: "#ffffff",
      mutedText: "#a0a0a0",
      divider: "#606060"
    },
    tooltip: {
      main: "#2a2a2a",
      contrastText: "#ffffff",
      highlight: "#505050",
    }
  },
};

export default dark;