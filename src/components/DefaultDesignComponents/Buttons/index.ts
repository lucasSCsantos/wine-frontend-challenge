import styled, { css } from 'styled-components';
import theme from '../../../styles/theme';

const { color: buttonColor, font, button } = theme;
const { functional } = buttonColor;

export type ButtonProps = {
  color?: keyof typeof functional;
  weight?: keyof typeof font.weight;
  size?: keyof typeof button.size;
  fill?: boolean;
  hover?: boolean;
  shadow?: boolean;
  circle?: boolean;
};

export const Button = styled('button').attrs<ButtonProps>(() => ({
  type: 'button'
}))<ButtonProps>`
  ${({
    fill,
    weight = 400,
    hover,
    size = 'medium',
    shadow,
    circle,
    color
  }) => css`
    ${() =>
      fill
        ? css`
            background-color: ${functional[color].default};
            border: none;
            color: ${theme.color.structure.white};
            ${() =>
              hover &&
              css`
                &:hover {
                  background-color: ${functional[color].hover};
                  transition: 0.5s ease;
                }
              `};
          `
        : css`
            background-color: ${theme.color.structure.transparent};
            border: 1px solid ${functional[color].default};
            color: ${functional[color].default};
            ${() =>
              hover &&
              css`
                &:hover {
                  background-color: ${functional[color].default};
                  color: ${theme.color.structure.white};
                  border: none;
                  transition: 0.5s ease;
                }
              `}
          `};
    &:disabled {
      background-color: ${functional[color].disabled};
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
