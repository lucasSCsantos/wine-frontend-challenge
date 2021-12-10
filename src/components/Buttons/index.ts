import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

const { color, font, button } = theme;

export type ButtonProps = {
  type?: keyof typeof color.functional;
  weight?: keyof typeof font.weight;
  fill?: boolean;
  hover?: boolean;
  shadow?: boolean;
  size?: keyof typeof button.size;
};

export const Button = styled('button')<ButtonProps>`
  ${({
    type = 'success',
    fill,
    weight = 400,
    hover,
    size = 'medium',
    shadow
  }) => css`
    ${() =>
      fill
        ? css`
            background-color: ${color.functional[type]};
            border: none;
            color: ${color.structure.white};
            ${() =>
              hover &&
              css`
                &:hover {
                  background-color: ${color.functional[`${type}Dark`]};
                  transition: 0.5s ease;
                }
              `};
          `
        : css`
            background-color: ${color.structure.transparent};
            border: 1px solid ${color.functional[type]};
            color: ${color.functional[type]};
            ${() =>
              hover &&
              css`
                &:hover {
                  background-color: ${color.functional[type]};
                  color: ${color.structure.white};
                  border: none;
                  transition: 0.5s ease;
                }
              `}
          `};
    &:disabled {
      background-color: -internal-light-dark(
        rgba(239, 239, 239, 0.3),
        rgba(19, 1, 1, 0.3)
      );
      color: -internal-light-dark(
        rgba(16, 16, 16, 0.3),
        rgba(255, 255, 255, 0.3)
      );
      border-color: -internal-light-dark(
        rgba(118, 118, 118, 0.3),
        rgba(195, 195, 195, 0.3)
      );
    }
    width: ${button.size[size].width};
    height: ${button.size[size].height};
    box-shadow: ${() =>
      shadow && '0px 0.9733840227127075px 1.946768045425415px 0px #00000033'};
    transition: 0.2s ease;
    font-weight: ${font.weight[weight]};
    font-family: 'Lato';
    border-radius: 4px;
  `}
`;
