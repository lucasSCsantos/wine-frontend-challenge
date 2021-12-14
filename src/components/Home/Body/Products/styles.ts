import styled, { css } from 'styled-components';

export type ImageProps = {
  src?: string;
};

export const Container = styled.div`
  height: inherit;
  width: 69%;
  padding: 38px 0 44px 0;
  small span {
    font-weight: 700;
  }
  hr {
    display: none;
    margin-top: 20px;
  }
  .pagination {
    display: flex;
    color: ${({ theme }) => theme.color.functional.tannat.default};
    font-family: Lato;
    width: 100%;
    justify-content: center;
    .next-item,
    .previous-item {
      display: flex;
      align-items: center;
    }
    .next-item {
      margin-left: 8px;
    }
    .previous-item {
      margin-right: 8px;
    }
    .break {
      display: flex;
      align-items: flex-end;
      font-size: 16px;
      margin: 0 4px;
    }
    .page-item {
      width: 38px;
      height: 38px;
      cursor: pointer;
      margin: 0 8px;
      .page-link {
        width: inherit;
        height: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 3px;
      border: 1px solid ${({ theme }) => theme.color.functional.tannat.default};
    }
    .active {
      background-color: ${({ theme }) => theme.color.functional.tannat.default};
      color: ${({ theme }) => theme.color.structure.white};
    }
    .disabled {
      display: none;
    }
    .active + .page-item {
      width: 73px;
    }
  }
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoint.laptop}) {
      width: 90%;
      hr {
        display: block;
        border-top: 0.5px solid ${theme.color.gray.light};
      }
      .pagination {
        display: none;
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
        &,
        .product-title {
          width: 156px;
        }
        p {
          font-size: 14px;
        }
        .price-member {
          .member {
            font-weight: 300;
            font-size: 10px;
            padding: 0 10px;
            line-height: 10px;
            text-align: end;
          }
          width: 120px;
        }
      }
    `}
  }
  .product-title {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      /* height: 178.1292724609375px; */
      width: 191px;
    }
  }
  .price-nom-member {
    width: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .price-member {
    display: flex;
    align-items: flex-end;
    .member {
      margin-right: 7px;
    }
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
