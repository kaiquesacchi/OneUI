import { StatusBar } from "expo-status-bar";
import React from "react";
import "styled-components/native";

type Palette = {
  main: string
  contrastText: string
  mutedText: string
  highlight: string
  divider: string
}

declare module "styled-components" {
  export interface DefaultTheme {
    statusBar: React.ComponentProps<typeof StatusBar>['style'],
    palette: {
      primary: Palette,
      secondary: Palette,
      background: Palette,
      focusBlock: Palette,
      tooltip: Palette,
    }
  }
}