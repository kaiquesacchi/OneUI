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
  color: ${p => p.theme.palette.background.contrastText}
`;

/* ------------------------------------------- Content ------------------------------------------ */
export const Header = styled.View`
  background-color: ${p => p.theme.palette.background.main};
  padding: 20px;
  flex-direction: row;
  align-items: center;
`;

export const BackButton = styled.TouchableHighlight`
  background-color: ${p => p.theme.palette.background.main};
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.palette.background.contrastText}
`;

interface iTitle {
  opacity: number;
}
export const Title = styled.Text<iTitle>`
  opacity: ${p => p.opacity};
  font-size: 24px;
`;

export const Content = styled.View`
  flex: 1;
`;