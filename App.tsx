import React from "react";
import { StatusBar } from "expo-status-bar";
import { AppBar } from "./src";
import { ThemeProvider } from "styled-components/native";
import themes from "./src/themes";
import { View } from "react-native";

function App() {
  return (
    <ThemeProvider theme={themes["light"]}>
      <StatusBar style="dark" backgroundColor={themes["light"].palette.background.main} translucent={false} />
      <AppBar backButton title="App Bar" expandedTitle="App Bar Component">
        <View style={{ height: 300, backgroundColor: "#400" }} />
        <View style={{ height: 300, backgroundColor: "#600" }} />
        <View style={{ height: 300, backgroundColor: "#800" }} />
      </AppBar>
    </ThemeProvider>
  );
}

// > Switch between exports to toggle storybook.
export { default } from "./storybook";
// export default App;
