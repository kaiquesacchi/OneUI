import styled from "styled-components/native";

export const ListItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

interface iImage {
  format: 'circle' | 'rounded' | 'square'
  backgroundColor?: string
}

export const Image = styled.Image<iImage>`
  width: 40px;
  height: 40px;
  border-radius: ${p => p.format === 'circle' ? '20px' : p.format === 'rounded' ? '10px' : '0px'};
  margin-right: 10px;
  background-color: ${p => p.backgroundColor ?? 'transparent'};
`;

interface iIconContainer {
  backgroundColor?: string
  format: 'circle' | 'rounded' | 'square'
}

export const IconContainer = styled.View<iIconContainer>`
  width: 40px;
  height: 40px;
  border-radius: ${p => p.format === 'circle' ? '20px' : p.format === 'rounded' ? '10px' : '0px'};
  margin-right: 10px;
  background-color: ${p => p.backgroundColor ?? 'transparent'};
  align-items: center;
  justify-content: center;
`

export const TextArea = styled.View`
  flex: 1;
`;

export const Divider = styled.View`
  height: 1px;
  background-color: ${p => p.theme.palette.focusBlock.divider};
  margin: 10px 0;
`;