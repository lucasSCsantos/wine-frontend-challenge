import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 20;
  display: none;
  &.shoppingCartActive {
    display: block;
  }

  .title {
    width: 100%;
    height: 60px;
    padding: 20px;
    display: flex;
    align-items: center;
    & > svg:first-child {
      cursor: pointer;
    }
    p {
      margin-left: 20px;
    }
  }
  .content {
    background-color: ${({ theme }) => theme.color.background};
    position: absolute;
    right: 0;
    width: 350px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const CartProduct = styled.div`
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid #ddd;
  display: flex;
  position: relative;

  & > button:first-child {
    position: absolute;
    color: #9f9f9f;
    border: 2px solid #9f9f9f;
    display: flex;
    align-items: center;
    right: 16px;
    font-size: 16px;
    justify-content: center;
    height: 18px;
    width: 18px;
    background-color: ${({ theme }) => theme.color.structure.transparent};
    border-radius: 20px;
  }

  img {
    height: 110px;
    width: 72px;
  }

  .cart-item-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > small:nth-child(2) {
      margin-top: -10px;
    }
    .cart-item-count {
      font-family: Lato;
      width: 60px;
      height: 35px;
      border-radius: 4px;
      border: 1px solid #bfbfbf;
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        border: none;
        background-color: ${({ theme }) => theme.color.structure.transparent};
        color: #bfbfbf;
        font-size: 16px;
        width: 30%;
      }
    }
  }
`;
