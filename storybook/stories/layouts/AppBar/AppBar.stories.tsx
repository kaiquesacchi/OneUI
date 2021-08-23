import React from "react";
import { storiesOf } from "@storybook/react-native";
import { AppBar } from "../../../../src/components/layouts";
import { iActionButton } from "../../../../src/components/buttons";
import { text, boolean, select } from "@storybook/addon-knobs";

const defaultActionButtons: iActionButton[] = [
  { label: "Add", icon: "plus", onPress: () => {} },
  { label: "Remove", icon: "minus", onPress: () => {} },
  { label: "Search", icon: "search", onPress: () => {} },
  { label: "Settings", icon: "settings", onPress: () => {} },
  { label: "Share", icon: "share", onPress: () => {} },
];

storiesOf("layouts/App Bar", module).add("Default", () => (
  <AppBar
    title={text("title", "App Bar Example")}
    expandedTitle={text("expandedTitle", "Expanded App Bar")}
    backButtonOnPress={boolean("backButton", true) ? () => {} : undefined}
    actionButtons={defaultActionButtons.slice(
      0,
      select("actionButtons (amount)", { None: 0, One: 1, Two: 2, Three: 3, Four: 4, Five: 5 }, 5)
    )}
  />
));
