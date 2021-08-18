import styled from "styled-components/native";

export const Container = styled.Modal``;

export const DismissArea = styled.TouchableOpacity`
  flex: 1;
`;

export interface iOffset {
  left?: string,
  right?: string,
  top?: string,
  bottom?: string
}

interface iTooltip {
  offset: iOffset
}
export const Tooltip = styled.View<iTooltip>`
  position: absolute;
  padding: 10px 16px;
  background-color: ${p => p.theme.palette.tooltip.main};
  border-radius: 20px;
  ${p => Object.entries(p.offset).map(([key, value]) => `${key}: ${value};`)}
`;

export const TextContent = styled.Text``;