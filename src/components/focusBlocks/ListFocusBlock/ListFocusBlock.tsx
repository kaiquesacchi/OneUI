import React from "react";
import { Image } from "react-native";
import { FocusBlock } from "../FocusBlock/FocusBlock";
import * as SC from "./styles";
import { Feather } from "@expo/vector-icons";
import { Typography } from "@atoms";

interface iItem {
  title: string;
  subtitle?: string;
}

interface iItemWithImage extends iItem {
  icon: never;
  image: {
    source: React.ComponentProps<typeof Image>["source"];
    format: "circle" | "rounded" | "square";
    backgroundColor?: string;
  };
}

interface iItemWithIcon extends iItem {
  icon: {
    iconProps: React.ComponentProps<typeof Feather>;
    format: "circle" | "rounded" | "square";
    backgroundColor?: string;
  };
  image: never;
}

interface iProps extends React.ComponentProps<typeof FocusBlock> {
  items: (iItemWithImage | iItemWithIcon | iItem)[];
}

export default function ListFocusBlock({ items, ...rest }: iProps) {
  return (
    <FocusBlock {...rest}>
      {items.map(({ title, subtitle, ...avatar }, index) => (
        <React.Fragment key={index}>
          {index !== 0 && <SC.Divider />}
          <SC.ListItem>
            {"image" in avatar && (
              <SC.Image
                source={avatar.image.source}
                format={avatar.image.format}
                backgroundColor={avatar.image.backgroundColor}
              />
            )}
            {"icon" in avatar && (
              <SC.IconContainer format={avatar.icon.format} backgroundColor={avatar.icon.backgroundColor}>
                <Feather {...avatar.icon.iconProps} />
              </SC.IconContainer>
            )}
            <SC.TextArea>
              <Typography type="mainList">{title}</Typography>
              {subtitle && (
                <Typography type="subList" muted>
                  {subtitle}
                </Typography>
              )}
            </SC.TextArea>
          </SC.ListItem>
        </React.Fragment>
      ))}
    </FocusBlock>
  );
}
