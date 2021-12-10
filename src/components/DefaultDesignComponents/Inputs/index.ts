import styled from 'styled-components';
import theme from '../../../styles/theme';

const { font, button } = theme;

export type RadioProps = {
  weight?: keyof typeof font.weight;
  size?: keyof typeof button.size;
  hover?: boolean;
};

// export const Item = styled.div`
//   display: flex;
//   align-items: center;
//   height: 48px;
//   position: relative;
// `;

// export const RadioButtonLabel = styled.label`
//   position: absolute;
//   top: 25%;
//   left: 4px;
//   width: 24px;
//   height: 24px;
//   border-radius: 50%;
//   background: white;
//   border: 1px solid #bebebe;
// `;
// export const RadioButton = styled.input`
//   opacity: 0;
//   z-index: 1;
//   border-radius: 50%;
//   width: 24px;
//   height: 24px;
//   margin-right: 10px;

//   &:hover ~ ${RadioButtonLabel} {
//     background: #bebebe;
//     &::after {
//       content: '';
//       display: block;
//       border-radius: 50%;
//       width: 12px;
//       height: 12px;
//       margin: 6px;
//       background: #eeeeee;
//     }
//   }
//   ${props =>
//     props.checked &&
//     `
//     &:checked + ${RadioButtonLabel} {
//       background: #db7290;
//       border: 1px solid #db7290;
//       &::after {
//         content: "";
//         display: block;
//         border-radius: 50%;
//         width: 12px;
//         height: 12px;
//         margin: 6px;
//         box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
//         background: white;
//       }
//     }
//   `}
// `;

export const Root = styled.div`
  margin: 5px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  position: relative;
  label {
    margin-left: 25px;
  }
  &::before {
    content: '';
    border-radius: 100%;
    border: 1px solid #ddd;
    background: #fafafa;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 0;
  }
`;

export const Fill = styled.div`
  background: ${({ theme }) => theme.color.functional.tannat.default};
  width: 0;
  height: 0;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease-in, height 0.2s ease-in;
  pointer-events: none;
  z-index: 1;
  &::before {
    content: '';
    /* opacity: 1; */
    width: 16px;
    position: absolute;
    height: 16px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid ${({ theme }) => theme.color.gray.light};
    border-radius: 100%;
    opacity: 0.2;
  }
`;

export const Input = styled.input`
  opacity: 0;
  z-index: 2;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;

  &:hover ~ ${Fill} {
    content: '';
    display: block;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: ${({ theme }) => theme.color.functional.tannat.default}33;
    /* transition: ease 0.2s; */
  }

  &:focus {
    outline: none;
  }

  &:checked {
    & ~ ${Fill} {
      width: 10px;
      height: 10px;
      transition: width 0.2s ease-out, height 0.2s ease-out;

      &::before {
        border: 2px solid
          ${({ theme }) => theme.color.functional.tannat.default};
        transition: opacity 1s ease;
        opacity: 1;
      }
    }
  }
`;
