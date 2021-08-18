import React, { createContext, useContext, useState } from "react";
import { Dimensions, NativeTouchEvent } from "react-native";
import * as SC from "./styles";

/* ------------------------------------------ Constants ----------------------------------------- */

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
const VERTICAL_OFFSET = 30; // Tooltip`s vertical offset.

/* -------------------------------------------- Types ------------------------------------------- */

interface iPoint {
  x: number;
  y: number;
}

interface iData {
  content: React.ReactNode | string;
  nativeEvent: NativeTouchEvent;
  dismissOnPressOut?: boolean;
}

interface iProps {
  children: React.ReactNode;
}

/* ------------------------------------- Auxiliary functions ------------------------------------ */

/** Computes the required offset to accommodate the tooltip close to the trigger location.
 *
 * The tooltip will be anchored to the `coordinates` provided, always facing the biggest quadrant
 * available. A fixed vertical offset is applied to prevent it from being covered by the user's
 * finger.
 * @param coordinates - {x: number, y:number}
 * @returns { left?: number, right?: number, top?: number, bottom?: number }
 */
const getOffset = (coordinates: iPoint): SC.iOffset => {
  const x = Math.round(coordinates.x);
  const y = Math.round(coordinates.y);
  return {
    ...(x <= SCREEN_WIDTH / 2 ? { left: x + "px" } : { right: SCREEN_WIDTH - x + "px" }),
    ...(y <= SCREEN_HEIGHT / 2
      ? { top: y + VERTICAL_OFFSET + "px" }
      : { bottom: SCREEN_HEIGHT - y + VERTICAL_OFFSET + "px" }),
  };
};

/* ---------------------------------------------------------------------------------------------- */

const defaultContext: [(newData: iData) => void, () => void] = [(newData) => {}, () => {}];
const TooltipContext = createContext(defaultContext);

/** Provides methods to display and dismiss Tooltips
 *
 * @returns `[displayFunction: (tooltipSettings) => void, dismissFunction: () => void]`
 */
export function useTooltip() {
  return useContext(TooltipContext);
}

export function TooltipProvider({ children }: iProps) {
  const [data, setData] = useState<iData>();
  const dismissTooltip = () => setData(undefined);

  const content = typeof data?.content === "string" ? <SC.TextContent>{data.content}</SC.TextContent> : data?.content;

  return (
    <TooltipContext.Provider value={[setData, dismissTooltip]}>
      {data && (
        <SC.Container transparent>
          <SC.DismissArea activeOpacity={1} onPress={dismissTooltip}>
            <SC.Tooltip
              offset={getOffset({
                x: data.nativeEvent.pageX,
                y: data.nativeEvent.pageY,
              })}
            >
              {content}
            </SC.Tooltip>
          </SC.DismissArea>
        </SC.Container>
      )}
      {children}
    </TooltipContext.Provider>
  );
}
