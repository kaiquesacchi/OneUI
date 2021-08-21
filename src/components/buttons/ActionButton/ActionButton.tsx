import React from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import * as SC from "./styles";
import { GestureResponderEvent, TouchableHighlight } from "react-native";
import { useTooltip } from "../../toasts";

export interface iActionButton {
  label: string;
  icon: React.ComponentProps<typeof Feather>["name"];
  onPress: (event: GestureResponderEvent) => any;
  dismissOnPressOut?: boolean;
}

type iProps = iActionButton & React.ComponentProps<typeof TouchableHighlight>;

export function ActionButton({ label, icon, dismissOnPressOut, onPressOut, ...rest }: iProps) {
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
  actionButtons: iActionButton[];
}
export function ActionButtonMoreMenu({ actionButtons }: iPropsActionButtonMoreMenu) {
  const theme = useTheme();
  const [setTooltip, dismissTooltip] = useTooltip();

  const moreMenuTooltip = (items: iActionButton[]) => (
    <SC.MoreMenuTooltip>
      {items.map((item, index) => (
        <SC.MoreItem
          onPress={(event) => {
            dismissTooltip();
            item.onPress(event);
          }}
          underlayColor={theme.palette.background.highlight}
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
