import React from "react";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import { Text } from "react-native";
import { FocusBlock } from "../../../src/components/focusBlocks";
import styled from "styled-components/native";

const Background = styled.View`
  background-color: ${(p) => p.theme.palette.background.main};
  height: 100%;
  width: 100%;
`;

storiesOf("focusBlocks/Default", module)
  .addDecorator((story) => <Background>{story()}</Background>)
  .add("With external header", () => (
    <FocusBlock externalHeader={text("externalHeader", "External Header")}>
      <Text>Content</Text>
    </FocusBlock>
  ))
  .add("Without external header", () => (
    <FocusBlock>
      <Text>Content</Text>
    </FocusBlock>
  ));
