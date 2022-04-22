import styled from "styled-components/native";

export const Tooltip = styled.View`
  background-color: ${p => p.theme.palette.tooltip.main};
`;

export const Item = styled.TouchableHighlight`
  width: 100%;
  padding: 10px 20px;
`;

export const Label = styled.Text`
  color: ${p => p.theme.palette.tooltip.contrastText}
`;