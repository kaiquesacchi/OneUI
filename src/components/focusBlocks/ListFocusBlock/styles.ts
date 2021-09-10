import styled from "styled-components/native";

export const ListItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

interface iIcon {
  format: 'circle' | 'rounded' | 'square'
}
export const Icon = styled.Image<iIcon>`
  width: 40px;
  height: 40px;
  border-radius: ${p => p.format === 'circle' ? '20px' : p.format === 'rounded' ? '10px' : '0px'};
  margin-right: 10px;
`;

export const TextArea = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 18px;
`;

export const Subtitle = styled.Text`
  color: ${p => p.theme.palette.focusBlock.mutedText}
`;

export const Divider = styled.View`
  height: 1px;
  background-color: ${p => p.theme.palette.focusBlock.divider};
  margin: 10px 0;
`;