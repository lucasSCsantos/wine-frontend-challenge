import styled from 'styled-components';

export type RadioProps = {
  type: string;
};

export const RadioRoot = styled.div`
  margin: 5px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  position: relative;
  label {
    margin-left: 25px;
    cursor: pointer;
    transition: ease 0.2s;
    font-size: 14px;
    font-family: 'Lato';
    &:hover {
      color: ${({ theme }) => theme.color.functional.tannat.default};
      transition: ease 0.2s;
    }
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

export const RadioFill = styled.div`
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

export const RadioButton = styled.input.attrs<RadioProps>(() => ({
  type: 'radio'
}))<RadioProps>`
  opacity: 0;
  z-index: 2;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;

  &:hover ~ ${RadioFill} {
    content: '';
    display: block;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: ${({ theme }) => theme.color.functional.tannat.default}33;
  }

  &:focus {
    outline: none;
  }

  &:checked {
    & ~ ${RadioFill} {
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
