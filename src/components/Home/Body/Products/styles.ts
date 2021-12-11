import styled, { css } from 'styled-components';

export type ImageProps = {
  src?: string;
};

export const Container = styled.div`
  height: inherit;
  width: 69%;
  padding: 38px 0 44px 0;
  hr {
    display: none;
    margin-top: 20px;
  }
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoint.laptop}) {
      width: 90%;
      hr {
        display: block;
        border-top: 0.5px solid ${theme.color.gray.light};
      }
    }
  `}
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
`;

export const ProductContainer = styled.div`
  margin-bottom: 30px;
  .product-card {
    box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
    background-color: white;
    width: 256px;
    height: 333px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin-bottom: 16px;
    padding: 10px 0 21px 0;
    ${({ theme }) => css`
      @media (max-width: ${theme.breakpoint.laptop}) {
        width: 156px;
        p {
          font-size: 14px;
        }
      }
    `}
  }
  .price-nom-member {
    width: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .price-member {
    width: 142px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  img {
    /* height: 178.1292724609375px; */
    width: 191px;
  }
  button {
    ${({ theme }) => css`
      @media (max-width: ${theme.breakpoint.laptop}) {
        width: 156px;
      }
    `}
  }
`;

export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    background-image: url(${src});
    height: 178.1292724609375px;
    width: 198.57034301757812px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  `}
`;
