import styled, { css } from 'styled-components';
import theme from '../../../../styles/theme';

const { font } = theme;

export type PriceProps = {
  size?: keyof typeof font.size;
  weight?: keyof typeof font.weight;
};

export const PriceRoot = styled('p')<PriceProps>`
  ${({ size = 'xxxSmall', weight = 'bold' }) => css`
    font-size: ${font.size[size]};
    color: ${theme.color.text.tannat};
    font-weight: ${font.weight[weight]};
    font-family: 'Lato';
    .int {
      font-size: ${() => {
        switch (size) {
          case 'xxxSmall':
            return '23px';
          case 'xxSmall':
            return '18px';
          case 'small':
            return '24px';
          case 'xLarge':
            return '40px';
          default:
            return null;
        }
      }};
    }
    .float {
      font-size: ${() => {
        switch (size) {
          case 'xxxSmall':
            return '13px';
          case 'xxSmall':
            return '16px';
          case 'small':
            return '20px';
          case 'xLarge':
            return '32px';
          default:
            return null;
        }
      }};
    }
  `}
`;
