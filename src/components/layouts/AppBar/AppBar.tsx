import React, { useCallback, useRef, useState } from "react";
import { Dimensions, NativeScrollEvent, NativeSyntheticEvent, ScrollView } from "react-native";
import { ActionButton, iActionButton, ActionButtonMoreMenu } from "../../buttons";
import * as SC from "./styles";

/* ------------------------------------ Screen size constants ----------------------------------- */

const SCREEN_HEIGHT = Dimensions.get("window").height;
const EXPANDED_AREA_HEIGHT = Math.floor(SCREEN_HEIGHT * 0.3); // 30% of the screen size.
const EXPANDED_AREA_HEIGHT_75P = EXPANDED_AREA_HEIGHT * 0.75; // 75% of the expanded area height.
const EXPANDED_AREA_HEIGHT_50P = EXPANDED_AREA_HEIGHT * 0.5; // 50% of the expanded area height.
const EXPANDED_AREA_HEIGHT_25P = EXPANDED_AREA_HEIGHT * 0.25; // 25% of the expanded area height.

/* -------------------------------------------- Types ------------------------------------------- */

interface iProps {
  title: String;
  expandedTitle?: String;
  backButtonOnPress?: () => void;
  actionButtons?: iActionButton[];
  children?: React.ReactNode;
}

/* ---------------------------------------------------------------------------------------------- */

export function AppBar({ title, expandedTitle, backButtonOnPress, actionButtons, children }: iProps) {
  const [headerOpacity, setHeaderOpacity] = useState(0);
  const [expandedAreaOpacity, setExpandedAreaOpacity] = useState(1);
  const [expandedAreaPadding, setExpandedAreaPadding] = useState(0);

  const scrollViewRef = useRef<ScrollView>(null);

  /** Updates the opacity of the headers due to scrolling. */
  const handleScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    // When gliding upwards, may turn negative for a few frames.
    const pageYOffset = Math.max(event.nativeEvent.contentOffset.y, 0);

    // Expanded area opacity - Interpolation between 0% and 50% of the expanded area height, going from 1 to 0.
    if (pageYOffset < EXPANDED_AREA_HEIGHT_50P) {
      setExpandedAreaPadding(pageYOffset);
      setExpandedAreaOpacity(1 - pageYOffset / EXPANDED_AREA_HEIGHT_50P);
    } else setExpandedAreaOpacity(0);

    // Header opacity - Interpolation between 25% and 75% of the expanded area height, going from 0 to 1.
    if (pageYOffset < EXPANDED_AREA_HEIGHT_25P) setHeaderOpacity(0);
    else if (pageYOffset < EXPANDED_AREA_HEIGHT_75P)
      setHeaderOpacity((pageYOffset - EXPANDED_AREA_HEIGHT_25P) / EXPANDED_AREA_HEIGHT_75P);
    else setHeaderOpacity(1);
  }, []);

  /** Snaps the end of scroll to a fully shown or hidden expanded area.*/
  const handleScrollEnd = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const pageYOffset = event.nativeEvent.contentOffset.y;
      // Already fully hidden.
      if (pageYOffset > EXPANDED_AREA_HEIGHT) return;

      if (pageYOffset > EXPANDED_AREA_HEIGHT_50P) {
        // Scroll past the end of the expanded area.
        scrollViewRef.current?.scrollTo({ y: EXPANDED_AREA_HEIGHT, animated: true });
      } else {
        // Scroll back to the beginning.
        scrollViewRef.current?.scrollTo({ y: 0, animated: true });
      }
    },
    [scrollViewRef]
  );

  return (
    <SC.Container
      stickyHeaderIndices={[1]}
      onScroll={handleScroll}
      onScrollEndDrag={handleScrollEnd}
      ref={scrollViewRef}
      contentContainerStyle={{ minHeight: SCREEN_HEIGHT + EXPANDED_AREA_HEIGHT }}
    >
      <SC.ExpandedArea height={EXPANDED_AREA_HEIGHT} paddingTop={expandedAreaPadding}>
        <SC.ExpandedTitle opacity={expandedAreaOpacity} numberOfLines={3}>
          {expandedTitle ?? title}
        </SC.ExpandedTitle>
      </SC.ExpandedArea>
      <SC.Header>
        {backButtonOnPress && (
          <ActionButton label="Go Back" icon="chevron-left" onPress={backButtonOnPress} dismissOnPressOut />
        )}
        <SC.Title opacity={headerOpacity} numberOfLines={1}>
          {title}
        </SC.Title>
        <SC.ActionButtonsArea>
          {actionButtons?.slice(0, actionButtons.length > 3 ? 2 : 3).map((actionButton, index) => (
            <ActionButton {...actionButton} dismissOnPressOut key={index} />
          ))}
        </SC.ActionButtonsArea>
        {actionButtons && actionButtons.length > 3 && <ActionButtonMoreMenu actionButtons={actionButtons.slice(2)} />}
      </SC.Header>
      <SC.Content>{children}</SC.Content>
    </SC.Container>
  );
}
