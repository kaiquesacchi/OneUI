import styled, { DefaultTheme } from "styled-components/native";

type FontKey = "extendedTitle"
  | "dialogTitle"
  | "title"
  | "mainList"
  | "textButton"
  | "bodyDescription"
  | "raisedButton"
  | "subHeader"
  | "subList"

type FontDescription = {
  [key in FontKey]: {
    size: number;
    weight: 'bold' | 'normal' | '100';
    background: keyof DefaultTheme['palette'];
  };
};

const fontDefinitions: FontDescription = {
  extendedTitle: { size: 40, weight: '100', background: 'background'},
  dialogTitle: { size: 20, weight: 'bold', background: 'focusBlock'},
  title: { size: 19, weight: 'normal', background: 'background'},
  mainList: { size: 18, weight: 'normal', background: 'focusBlock'},
  textButton: { size: 17, weight: 'normal', background: 'primary'},
  bodyDescription: { size: 16, weight: 'normal', background: 'background'},
  raisedButton: { size: 15, weight: 'normal', background: 'background'},
  subHeader: { size: 14, weight: 'bold', background: 'background'},
  subList: { size: 13, weight: 'normal', background: 'focusBlock'},
}

interface iTypography {
  type: FontKey
  background?: keyof DefaultTheme['palette'];
  muted?: boolean
}

export default styled.Text<iTypography>`
  color: ${p => p.theme.palette[fontDefinitions[p.type].background][p.muted ? 'mutedText' : 'contrastText']};
  font-size: ${p => fontDefinitions[p.type].size}px;
  font-weight: ${p => fontDefinitions[p.type].weight};
`;