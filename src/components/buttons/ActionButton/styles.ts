import styled from "styled-components/native";

export const Container = styled.TouchableHighlight`
  background-color: ${p => p.theme.palette.background.main};
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.palette.background.contrastText};
`;
