import styled, { css } from "styled-components";
import theme from "../../styles/theme";

const { color, font } = theme;

export type HeadingProps = {
  type?: keyof typeof color.text;
  size?: keyof typeof font.size;
  fontWeight?: 300 | 400 | 600 | 700;
  lineHeight?: string | number;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

// export type TextProps = {
//   color?: keyof typeof colors;
//   size?: keyof typeof sizes;
//   fontWeight?: 100 | 400 | 700;
//   lineHeight?: string | number;
// };

export const Heading = styled("h1").attrs<HeadingProps>(({ level = 1 }) => ({
  as: `h${level}`,
}))<HeadingProps>`
  ${({ type = "default", size, fontWeight = 700, lineHeight = 1.5 }) => css`
    font-size: ${font.size[size]};
    color: ${color.text[type]};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
    z-index: 10;
    font-family: "Neo Sans Std Regular";
    /* @media (max-width: 1440px) {
    }
    @media (max-width: 1024px) {
    }
    @media (max-width: 834px) {
    }
    @media (max-width: 428px) {
    } */
  `}
`;

// export const Text = styled('p')<TextProps>`
//   ${({ color = 'text', size, fontWeight = 600, lineHeight = 1.5 }) => css`
//     font-size: ${sizes[size]};
//     color: ${colors[color]};
//     font-weight: ${fontWeight};
//     line-height: ${lineHeight};
//     @media (max-width: 1440px) {
//       font-size: ${sizeArr[sizeArr.indexOf(sizes[size]) - 1]};
//     }
//     @media (max-width: 1024px) {
//       font-size: ${sizeArr[sizeArr.indexOf(sizes[size]) - 2]};
//     }
//     @media (max-width: 834px) {
//       font-size: ${sizeArr[sizeArr.indexOf(sizes[size]) - 3]};
//     }
//     @media (max-width: 428px) {
//       font-size: ${sizeArr[sizeArr.indexOf(sizes[size]) - 4]};
//     }
//   `}
// `;

// export const Area = styled.div<AreaProps>`
//   ${({ backgroundColor = 'background', width, height }) => css`
//     background-color: ${colors[backgroundColor]};
//     width: ${width}%;
//     height: ${typeof height === 'number' ? `${height}rem` : height};
//     position: relative;
//     display: flex;
//   `}
// `;
