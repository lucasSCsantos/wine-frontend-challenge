import styled, { css } from 'styled-components';
import theme from '../../../styles/theme';

const { color, font } = theme;

export type HeadingProps = {
  type?: keyof typeof color.text;
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
    color: ${color.text[type]};
    font-weight: ${font.weight[weight]};
    line-height: ${lineHeight}px;
    z-index: 10;
    font-family: 'Neo Sans Std Regular';
  `}
`;

export type ParagraphProps = {
  type?: keyof typeof color.text;
  size?: keyof typeof font.size;
  weight?: keyof typeof font.weight;
  lineHeight?: string | number;
};

export const Paragraph = styled('p')<ParagraphProps>`
  ${({
    type = 'default',
    size = 'medium',
    weight = 'normal',
    lineHeight = 20
  }) => css`
    font-size: ${font.size[size]};
    color: ${color.text[type]};
    font-weight: ${font.weight[weight]};
    line-height: ${lineHeight}px;
    font-family: 'Lato';
  `}
`;

export type SmallParagraphProps = {
  type?: keyof typeof color.text;
  size?: keyof typeof font.size;
  weight?: keyof typeof font.weight;
  lineHeight?: string | number;
};

export const SmallParagraph = styled('small')<ParagraphProps>`
  ${({
    type = 'default',
    size = 'xSmall',
    weight = 'normal',
    lineHeight = 20
  }) => css`
    font-size: ${font.size[size]};
    color: ${color.text[type]};
    font-weight: ${font.weight[weight]};
    line-height: ${lineHeight}px;
    font-family: 'Lato';
  `}
`;
