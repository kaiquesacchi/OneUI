import { getStorybookUI, configure, addDecorator } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";

import "./rn-addons";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import themes from "../src/themes";

/* -------------------------------------- Global decorators ------------------------------------- */
type DecoratorFunction = Parameters<typeof addDecorator>[0];
type StoryFn = Parameters<DecoratorFunction>[0];

/** Adds the styled-components' theme provider and expo's status bar  */
const globalDecorator: DecoratorFunction = (story: StoryFn) => (
  <ThemeProvider theme={themes["light"]}>
    <StatusBar style="dark" backgroundColor={themes["light"].palette.background.main} translucent={false} />
    {story()}
  </ThemeProvider>
);
addDecorator(withKnobs);
addDecorator(globalDecorator); // enables knobs for all stories

/* ------------------------------------- Storybook settings ------------------------------------- */
// import stories
configure(() => {
  require("./stories");
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  host: "10.0.2.2", // Connects to the Android emulator.
  port: 7007,
  asyncStorage: null,
});

export default StorybookUIRoot;
