import styled from 'styled-components';
import theme from '../../../styles/theme';

const { font, button } = theme;

export type RadioProps = {
  weight?: keyof typeof font.weight;
  size?: keyof typeof button.size;
  hover?: boolean;
};

export const Radio = styled('input').attrs<RadioProps>(() => ({
  type: 'radio'
}))<RadioProps>``;
