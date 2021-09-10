import React from "react";
import { Image } from "react-native";
import { FocusBlock } from "../FocusBlock/FocusBlock";
import * as SC from "./styles";

export interface iItem {
  title: string;
  subtitle?: string;
  icon?: {
    source: React.ComponentProps<typeof Image>["source"];
    format: "circle" | "rounded" | "square";
  };
}

interface iProps extends React.ComponentProps<typeof FocusBlock> {
  items: iItem[];
}

export default function ListFocusBlock({ items, ...rest }: iProps) {
  return (
    <FocusBlock {...rest}>
      {items.map(({ title, subtitle, icon }, index) => (
        <>
          {index !== 0 && <SC.Divider />}
          <SC.ListItem key={index}>
            {icon && <SC.Icon source={icon.source} format={icon.format} />}
            <SC.TextArea>
              <SC.Title>{title}</SC.Title>
              {subtitle && <SC.Subtitle>{subtitle}</SC.Subtitle>}
            </SC.TextArea>
          </SC.ListItem>
        </>
      ))}
    </FocusBlock>
  );
}
