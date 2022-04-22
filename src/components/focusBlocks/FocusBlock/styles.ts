import styled from "styled-components/native";

export const Container = styled.View`
  padding-top: 10px;
`;

export const Card = styled.View`
  background-color: ${p => p.theme.palette.focusBlock.main};
  padding: 15px 30px;
  border-radius: 25px;
  margin: 5px -30px 0px;
`;
