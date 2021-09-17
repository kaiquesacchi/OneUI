import React from "react";
import { text, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import styled from "styled-components/native";
import ListFocusBlock from "../../../src/components/focusBlocks/ListFocusBlock/ListFocusBlock";

const Background = styled.View`
  background-color: ${p => p.theme.palette.background.main};
  height: 100%;
  width: 100%;
`;

const itemsWithoutAvatar: React.ComponentProps<typeof ListFocusBlock>["items"] = [1, 2, 3, 4].map(item => ({
  title: "Title " + item,
  subtitle: "Subtitle " + item,
}));

const itemsWithIcon = (format: string): React.ComponentProps<typeof ListFocusBlock>["items"] =>
  ["Bold", "Italic", "Underline", "Type"].map(item => ({
    title: item,
    subtitle: "Lorem ipsum dolor sit",
    icon: {
      iconProps: {
        name: item.toLowerCase(),
        size: 22,
        color: "#ffffff",
      },
      format,
      backgroundColor: "#4d7fca",
    },
  }));

storiesOf("focusBlocks/List", module)
  .addDecorator(story => <Background>{story()}</Background>)
  .add("Without avatar", () => (
    <ListFocusBlock externalHeader={text("externalHeader", "External Header")} items={itemsWithoutAvatar} />
  ))
  .add("With icons", () => (
    <ListFocusBlock
      externalHeader={text("externalHeader", "External Header")}
      items={itemsWithIcon(select("format", { Square: "square", Circle: "circle", Rounded: "rounded" }, "rounded"))}
    />
  ));
