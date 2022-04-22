import { Typography } from "@atoms";
import React from "react";
import * as SC from "./styles";

interface iProps {
  externalHeader?: string;
  children?: React.ReactNode;
}

export function FocusBlock({ externalHeader, children }: iProps) {
  return (
    <SC.Container>
      {externalHeader && (
        <Typography type="subHeader" muted>
          {externalHeader}
        </Typography>
      )}
      <SC.Card>{children}</SC.Card>
    </SC.Container>
  );
}
