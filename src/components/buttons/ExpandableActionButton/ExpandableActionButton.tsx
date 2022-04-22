import React from "react";
import ActionButton from "@buttons/ActionButton/ActionButton";
import { useTooltip } from "@toasts/index";
import { useTheme } from "styled-components";
import * as SC from "./styles";

interface iProps {
  actionButtons: React.ComponentProps<typeof ActionButton>[];
}

export default function ExpandableActionButton({ actionButtons }: iProps) {
  const theme = useTheme();
  const [setTooltip, dismissTooltip] = useTooltip();

  const Tooltip = (items: typeof actionButtons) => (
    <SC.Tooltip>
      {items.map((item, index) => (
        <SC.Item
          onPress={(event) => {
            dismissTooltip();
            item.onPress(event);
          }}
          underlayColor={theme.palette.tooltip.highlight}
          key={index}
        >
          <SC.Label>{item.label}</SC.Label>
        </SC.Item>
      ))}
    </SC.Tooltip>
  );

  return (
    <ActionButton
      icon="more-vertical"
      label="More Actions"
      dismissOnPressOut
      onPress={(event) => {
        setTooltip({
          content: Tooltip(actionButtons),
          nativeEvent: event.nativeEvent,
        });
      }}
    />
  );
}
