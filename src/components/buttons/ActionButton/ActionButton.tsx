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
}

type iProps = iActionButton & React.ComponentProps<typeof TouchableHighlight>;

export function ActionButton({ label, icon, ...rest }: iProps) {
  const theme = useTheme();
  const [setTooltip] = useTooltip();
  return (
    <SC.Container
      underlayColor={theme.palette.background.highlight}
      onLongPress={(event) => {
        setTooltip({
          content: label,
          nativeEvent: event.nativeEvent,
        });
      }}
      {...rest}
    >
      <Feather name={icon} size={24} color={theme.palette.background.contrastText} />
    </SC.Container>
  );
}
