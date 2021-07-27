import React from "react";
import { storiesOf } from "@storybook/react-native";
import { AppBar } from "../../../src";
import { ThemeProvider } from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import themes from "../../../src/themes";

storiesOf("App Bar", module)
  .addDecorator((story) => (
    <ThemeProvider theme={themes["light"]}>
      <StatusBar style="dark" backgroundColor={themes["light"].palette.background.main} translucent={false} />
      {story()}
    </ThemeProvider>
  ))
  .add("With expanded title", () => <AppBar title="App Bar" expandedTitle="Expanded App Bar" backButton />)
  .add("Without expanded title", () => <AppBar title="App Bar" backButton />);
