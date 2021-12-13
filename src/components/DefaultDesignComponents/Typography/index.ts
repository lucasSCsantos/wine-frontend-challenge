import styled, { css } from 'styled-components';
import theme from '../../../styles/theme';

const { color: textColor, font } = theme;
const { text, branding } = textColor;

export type HeadingProps = {
  type?: keyof typeof text;
  size?: keyof typeof font.size;
  weight?: keyof typeof font.weight;
  lineHeight?: string | number;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

export const Heading = styled('h1').attrs<HeadingProps>(({ level = 1 }) => ({
  as: `h${level}`
}))<HeadingProps>`
  ${({ type = 'default', size, weight = 'bold', lineHeight = 20 }) => css`
    font-size: ${font.size[size]};
    color: ${text[type]};
    font-weight: ${font.weight[weight]};
    line-height: ${lineHeight}px;
    z-index: 10;
    font-family: 'Neo Sans Std Regular';
  `}
`;

export type ParagraphProps = {
  type?: keyof typeof text;
  size?: keyof typeof font.size;
  weight?: keyof typeof font.weight;
  lineHeight?: string | number;
  align?: string;
};

export const Paragraph = styled('p')<ParagraphProps>`
  ${({
    type = 'default',
    size = 'medium',
    weight = 'normal',
    lineHeight = 20,
    align = 'center'
  }) => css`
    text-align: ${align};
    font-size: ${font.size[size]};
    color: ${text[type]};
    font-weight: ${font.weight[weight]};
    line-height: ${lineHeight}px;
    font-family: 'Lato';
  `}
`;

export type SmallParagraphProps = {
  type?: keyof typeof text;
  size?: keyof typeof font.size;
  weight?: keyof typeof font.weight;
  lineHeight?: string | number;
  decoration?: string;
  filled?: boolean;
  color?: keyof typeof branding.tavel;
};

export const SmallParagraph = styled('small')<SmallParagraphProps>`
  ${({
    type = 'default',
    size = 'xSmall',
    weight = 'normal',
    lineHeight = 20,
    decoration = 'unset',
    filled,
    color = 'default'
  }) => css`
    font-size: ${font.size[size]};
    color: ${text[type]};
    font-weight: ${font.weight[weight]};
    line-height: ${lineHeight}px;
    font-family: 'Lato';
    text-decoration: ${decoration};
    ${() =>
      filled &&
      css`
        background-color: ${branding.tavel[color]};
        border-radius: 2px;
        color: ${theme.color.structure.white};
        padding: 0 2px;
        line-height: 13px;
      `};
  `}
`;
