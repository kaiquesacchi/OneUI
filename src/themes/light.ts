import { DefaultTheme } from "styled-components";

const light:DefaultTheme = {
  statusBar: "dark",
  palette: {
    primary: {
      main: "#9060d0",
      contrastText: "#000000",
      mutedText: "#303030",
      divider: "#303030",
      highlight: "#d0d0d0"
    },
    secondary: {
      main: "#6030a0",
      contrastText: "#ffffff",
      mutedText: "#303030",
      divider: "#303030",
      highlight: "#d0d0d0"
    },
    background: {
      main: "#e8e8e8",
      contrastText: "#000000",
      mutedText: "#707070",
      highlight: "#d0d0d0",
      divider: "#e0e0e0"
    },
    focusBlock: {
      main: "#ffffff",
      contrastText: "#000000",
      mutedText: "#808080",
      divider: "#e0e0e0",
      highlight: "#e0e0e0",
    },
    tooltip: {
      main: "#ffffff",
      contrastText: "#000000",
      mutedText: "#303030",
      highlight: "#d0d0d0",
      divider: "#303030",
    }
  },
};

export default light;
