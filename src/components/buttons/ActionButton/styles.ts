import styled from "styled-components/native";

/* -------------------------------------------- Base -------------------------------------------- */
export const Container = styled.TouchableHighlight`
  background-color: ${p => p.theme.palette.background.main};
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.palette.background.contrastText};
`;

/* ----------------------------------------- 'More' Menu ---------------------------------------- */
export const MoreMenuTooltip = styled.View`
  background-color: ${p => p.theme.palette.tooltip.main};
`;

export const MoreItem = styled.TouchableHighlight`
  width: 100%;
  padding: 10px 20px;
`;

export const Label = styled.Text``;