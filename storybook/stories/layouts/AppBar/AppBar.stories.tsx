import React from "react";
import { storiesOf } from "@storybook/react-native";
import { AppBar } from "../../../../src/components/layouts";
import { iActionButton } from "../../../../src/components/buttons";
import { text, boolean, select } from "@storybook/addon-knobs";
import { FocusBlock } from "../../../../src/components/focusBlocks";
import { Text } from "react-native";
import ListFocusBlock from "../../../../src/components/focusBlocks/ListFocusBlock/ListFocusBlock";

const defaultActionButtons: iActionButton[] = [
  { label: "Add", icon: "plus", onPress: () => {} },
  { label: "Remove", icon: "minus", onPress: () => {} },
  { label: "Search", icon: "search", onPress: () => {} },
  { label: "Settings", icon: "settings", onPress: () => {} },
  { label: "Share", icon: "share", onPress: () => {} },
];

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const items: React.ComponentProps<typeof ListFocusBlock>["items"] = [
  {
    title: "First Item",
    subtitle: loremIpsum,
    image: {
      source: {
        uri: "https://img.flaticon.com/icons/png/512/169/169367.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF",
      },
      format: "square",
    },
  },
  {
    title: "Second Item",
    subtitle: loremIpsum,
    image: {
      source: {
        uri: "https://i.pinimg.com/originals/ec/a1/d7/eca1d7141639ee5b85e4f4c9a47d8ae4.png",
      },
      format: "circle",
    },
  },
  {
    title: "Third Item",
    subtitle: loremIpsum,
    image: {
      source: {
        uri: "https://cdn.pixabay.com/photo/2016/03/31/21/56/blue-1296737_1280.png",
      },
      format: "rounded",
    },
  },
];

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
      <ListFocusBlock items={items} externalHeader="List" />
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
