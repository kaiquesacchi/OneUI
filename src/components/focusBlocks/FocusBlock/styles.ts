import styled from "styled-components/native";

export const Container = styled.View`
  padding-top: 10px;
`;

export const ExternalHeader = styled.Text`
  color: ${p => p.theme.palette.background.mutedText};
  font-weight: 700;
  padding: 0px 30px;
`;

export const Card = styled.View`
  background-color: ${p => p.theme.palette.focusBlock.main};
  padding: 15px 30px;
  border-radius: 25px;
  margin-top: 5px;
`;
