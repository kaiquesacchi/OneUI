import React from "react";
import { StatusBar } from "expo-status-bar";
import { TooltipProvider } from "./components/toasts";
import { ThemeProvider } from "styled-components/native";
import themes from "../src/themes";

interface iProps {
  selectedTheme: keyof typeof themes;
  children: React.ReactNode;
}
export default function OneUIProvider({ selectedTheme, children }: iProps) {
  const theme = themes[selectedTheme];
  return (
    <ThemeProvider theme={theme}>
      <TooltipProvider>
        <StatusBar style={theme.statusBar} backgroundColor={theme.palette.background.main} translucent={false} />
        {children}
      </TooltipProvider>
    </ThemeProvider>
  );
}
