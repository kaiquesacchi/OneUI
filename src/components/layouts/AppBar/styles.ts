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
  padding-top: ${p => p.paddingTop}px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;

interface iExpandedTitle {
  opacity: number;
}
export const ExpandedTitle = styled.Text<iExpandedTitle>`
  opacity: ${p => p.opacity};
  font-size: 40px;
  color: ${p => p.theme.palette.background.contrastText};
`;

/* ------------------------------------------- Content ------------------------------------------ */
export const Header = styled.View`
  background-color: ${p => p.theme.palette.background.main};
  padding: 20px 5px;
  flex-direction: row;
  align-items: center;
`;

interface iTitle {
  opacity: number;
}
export const Title = styled.Text<iTitle>`
  opacity: ${p => p.opacity};
  font-size: 24px;
  color: ${p => p.theme.palette.background.contrastText};
  flex-shrink: 1;
  overflow: hidden;
`;

export const ActionButtonsArea = styled.View`
  flex-direction: row;
  flex-grow: 1;
  justify-content: flex-end;
`;

export const Content = styled.View`
  flex: 1;
`;