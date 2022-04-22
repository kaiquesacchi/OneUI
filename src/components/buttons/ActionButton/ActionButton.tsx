import React from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import * as SC from "./styles";
import { GestureResponderEvent } from "react-native";
import { useTooltip } from "../../toasts";

interface iPropsActionButton {
  label: string;
  icon: React.ComponentProps<typeof Feather>["name"];
  onPress: (event: GestureResponderEvent) => any;
  dismissOnPressOut?: boolean;
  onPressOut?: (event: GestureResponderEvent) => {};
}

export function ActionButton({
  label,
  icon,
  dismissOnPressOut,
  onPressOut,
  ...rest
}: iPropsActionButton) {
  const theme = useTheme();
  const [setTooltip, dismissTooltip] = useTooltip();
  return (
    <SC.Container
      underlayColor={theme.palette.background.highlight}
      onLongPress={(event) => {
        setTooltip({
          content: label,
          nativeEvent: event.nativeEvent,
        });
      }}
      onPressOut={(event) => {
        dismissOnPressOut && dismissTooltip();
        onPressOut && onPressOut(event);
      }}
      {...rest}
    >
      <Feather name={icon} size={24} color={theme.palette.background.contrastText} />
    </SC.Container>
  );
}

/* ----------------------------------------- 'More' Menu ---------------------------------------- */

interface iPropsActionButtonMoreMenu {
  actionButtons: iPropsActionButton[];
}
export function ActionButtonMoreMenu({ actionButtons }: iPropsActionButtonMoreMenu) {
  const theme = useTheme();
  const [setTooltip, dismissTooltip] = useTooltip();

  const moreMenuTooltip = (items: iPropsActionButton[]) => (
    <SC.MoreMenuTooltip>
      {items.map((item, index) => (
        <SC.MoreItem
          onPress={(event) => {
            dismissTooltip();
            item.onPress(event);
          }}
          underlayColor={theme.palette.tooltip.highlight}
          key={index}
        >
          <SC.Label>{item.label}</SC.Label>
        </SC.MoreItem>
      ))}
    </SC.MoreMenuTooltip>
  );

  return (
    <ActionButton
      icon="more-vertical"
      label="More Actions"
      dismissOnPressOut
      onPress={(event) => {
        setTooltip({
          content: moreMenuTooltip(actionButtons),
          nativeEvent: event.nativeEvent,
        });
      }}
    />
  );
}
