import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

const { color, font, button } = theme;

export type ButtonProps = {
  type?: keyof typeof color.functional;
  weight?: keyof typeof font.weight;
  size?: keyof typeof button.size;
  fill?: boolean;
  hover?: boolean;
  shadow?: boolean;
  circle?: boolean;
};

export const Button = styled('button')<ButtonProps>`
  ${({
    type = 'success',
    fill,
    weight = 400,
    hover,
    size = 'medium',
    shadow,
    circle
  }) => css`
    ${() =>
      fill
        ? css`
            background-color: ${color.functional[type].default};
            border: none;
            color: ${color.structure.white};
            ${() =>
              hover &&
              css`
                &:hover {
                  background-color: ${color.functional[type].hover};
                  transition: 0.5s ease;
                }
              `};
          `
        : css`
            background-color: ${color.structure.transparent};
            border: 1px solid ${color.functional[type].default};
            color: ${color.functional[type].default};
            ${() =>
              hover &&
              css`
                &:hover {
                  background-color: ${color.functional[type].default};
                  color: ${color.structure.white};
                  border: none;
                  transition: 0.5s ease;
                }
              `}
          `};
    &:disabled {
      background-color: ${color.functional[type].disabled};
      cursor: default;
    }
    width: ${button.size[size].width};
    height: ${button.size[size].height};
    border-radius: ${() => (circle ? `${button.size[size].width}` : '4px')};
    box-shadow: ${() =>
      shadow && '0px 0.9733840227127075px 1.946768045425415px 0px #00000033'};
    transition: 0.2s ease;
    font-weight: ${font.weight[weight]};
    font-family: 'Lato';
  `}
`;
