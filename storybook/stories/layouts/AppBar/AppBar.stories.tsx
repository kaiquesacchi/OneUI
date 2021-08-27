import React from "react";
import { storiesOf } from "@storybook/react-native";
import { AppBar } from "../../../../src/components/layouts";
import { iActionButton } from "../../../../src/components/buttons";
import { text, boolean, select } from "@storybook/addon-knobs";
import { FocusBlock } from "../../../../src/components/focusBlocks";
import { Text } from "react-native";

const defaultActionButtons: iActionButton[] = [
  { label: "Add", icon: "plus", onPress: () => {} },
  { label: "Remove", icon: "minus", onPress: () => {} },
  { label: "Search", icon: "search", onPress: () => {} },
  { label: "Settings", icon: "settings", onPress: () => {} },
  { label: "Share", icon: "share", onPress: () => {} },
];

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

storiesOf("layouts/App Bar", module)
  .add("Empty", () => (
    <AppBar
      title={text("title", "App Bar Example")}
      expandedTitle={text("expandedTitle", "Expanded App Bar")}
      backButtonOnPress={boolean("backButton", true) ? () => {} : undefined}
      actionButtons={defaultActionButtons.slice(
        0,
        parseInt(
          select("actionButtons (amount)", { None: "0", One: "1", Two: "2", Three: "3", Four: "4", Five: "5" }, "5")
        )
      )}
    />
  ))
  .add("Full", () => (
    <AppBar
      title={text("title", "App Bar Example")}
      expandedTitle={text("expandedTitle", "Expanded App Bar")}
      backButtonOnPress={boolean("backButton", true) ? () => {} : undefined}
      actionButtons={defaultActionButtons.slice(
        0,
        select("actionButtons (amount)", { None: 0, One: 1, Two: 2, Three: 3, Four: 4, Five: 5 }, 5)
      )}
    >
      <FocusBlock externalHeader="External Header">
        <Text>Content</Text>
      </FocusBlock>
      <FocusBlock externalHeader="External Header">
        <Text>Content</Text>
      </FocusBlock>
    </AppBar>
  ))
  .add("Long title", () => (
    <AppBar
      title={text("title", loremIpsum)}
      backButtonOnPress={boolean("backButton", true) ? () => {} : undefined}
      actionButtons={defaultActionButtons.slice(
        0,
        parseInt(
          select("actionButtons (amount)", { None: "0", One: "1", Two: "2", Three: "3", Four: "4", Five: "5" }, "5")
        )
      )}
    />
  ));
