import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 20;

  .content {
    background-color: ${({ theme }) => theme.color.background};
    position: absolute;
    right: 0;
    width: 350px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const CartProduct = styled.div`
  width: 100%;
  height: fit-content;
  background-color: red;
`;
