import React from "react";
import { storiesOf } from "@storybook/react-native";
import { AppBar } from "../../../src";
import { text, boolean } from "@storybook/addon-knobs";

storiesOf("App Bar", module).add("Default", () => (
  <AppBar
    title={text("title", "App Bar")}
    expandedTitle={text("expandedTitle", "Expanded App Bar")}
    backButton={boolean("backButton", true)}
  />
));
