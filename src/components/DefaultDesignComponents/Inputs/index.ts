import styled, { css } from 'styled-components';
// import theme from '../../../styles/theme';

// const { font, button } = theme;

export type RadioProps = {
  weight?: keyof typeof font.weight;
  size?: keyof typeof button.size;
  hover?: boolean;
};

export const Radio = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`;

export const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  border: 2px solid #ccc;
  background-color: #fff;
`;
export const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 5px;

  & ~ ${RadioButtonLabel} {
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 4px;
      background: ${({ theme }) => theme.color.functional.tannat.default};
      transform: scale(0);
    }
  }

  &:hover ~ ${RadioButtonLabel} {
    background: #ffff;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 4px;
      background: ${({ theme }) => theme.color.functional.tannat.default};
      transition: ease 0.2s;
      transform: scale(1);
    }
  }
  ${props =>
    props.checked &&
    css`
      &:checked + ${RadioButtonLabel} {
        transition: ease 0.2s;
        border: 2px solid
          ${({ theme }) => theme.color.functional.tannat.default};
        &::after {
          content: '';
          display: block;
          border-radius: 50%;
          width: 12px;
          height: 12px;
          margin: 4px;
          background: ${({ theme }) => theme.color.functional.tannat.default};
          transform: scale(1);
        }
      }
    `}
`;
