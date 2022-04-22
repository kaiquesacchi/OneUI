import React from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import * as SC from "./styles";
import { GestureResponderEvent } from "react-native";
import { useTooltip } from "../../toasts";

interface iProps {
  label: string;
  icon: React.ComponentProps<typeof Feather>["name"];
  onPress: (event: GestureResponderEvent) => any;
  dismissOnPressOut?: boolean;
  onPressOut?: (event: GestureResponderEvent) => {};
}

export default function ActionButton({
  label,
  icon,
  dismissOnPressOut,
  onPressOut,
  ...rest
}: iProps) {
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
