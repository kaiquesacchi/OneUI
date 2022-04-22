import styled from "styled-components/native";

export const Container = styled.ScrollView`
  background-color: ${p => p.theme.palette.background.main};
`;

/* ---------------------------------------- ExpandedArea ---------------------------------------- */
interface iExpandedArea {
  height: number;
  paddingTop: number;
}
export const ExpandedArea = styled.View<iExpandedArea>`
  height: ${p => p.height}px;
  padding: 0 60px;
  padding-top: ${p => p.paddingTop}px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;

/* ------------------------------------------- Header ------------------------------------------- */
export const Header = styled.View`
  background-color: ${p => p.theme.palette.background.main};
  padding: 18px 5px;
  flex-direction: row;
  align-items: center;
`;

export const ActionButtonsArea = styled.View`
  flex-direction: row;
  flex-grow: 1;
  justify-content: flex-end;
`;

/* ------------------------------------------- Content ------------------------------------------ */
export const Content = styled.View`
  flex: 1;
  padding: 0 30px;
`;