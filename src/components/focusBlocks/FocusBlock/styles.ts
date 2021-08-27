import styled from 'styled-components/native'

export const Container = styled.View``;

export const ExternalHeader = styled.Text`
  color: ${p => p.theme.palette.background.contrastText};
  font-weight: bold;
  padding: 5px 30px;
`;

export const Card = styled.View`
  background-color: ${p => p.theme.palette.focusBlock.main};
  padding: 20px 30px;
  border-radius: 30px;
`;