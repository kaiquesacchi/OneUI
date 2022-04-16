import React from "react";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import styled from "styled-components/native";
import Typography from "../../../../src/components/atoms/Typography";

const Background = styled.View`
  background-color: ${p => p.theme.palette.background.main};
  height: 100%;
  width: 100%;
  padding: 20px;
`;

storiesOf("atoms/Typography", module)
  .addDecorator(story => <Background>{story()}</Background>)
  .add("Without Background", () => (
    <>
      <Typography type="extendedTitle">{text("text-extendedTitle", "extendedTitle")}</Typography>
      <Typography type="dialogTitle">{text("text-dialogTitle", "dialogTitle")}</Typography>
      <Typography type="title">{text("text-title", "title")}</Typography>
      <Typography type="mainList">{text("text-mainList", "mainList")}</Typography>
      <Typography type="textButton">{text("text-textButton", "textButton")}</Typography>
      <Typography type="bodyDescription">{text("text-bodyDescription", "bodyDescription")}</Typography>
      <Typography type="raisedButton">{text("text-raisedButton", "raisedButton")}</Typography>
      <Typography type="subHeader">{text("text-subHeader", "subHeader")}</Typography>
      <Typography type="subList">{text("text-subList", "subList")}</Typography>
    </>
  ));
