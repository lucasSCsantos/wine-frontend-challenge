import styled, { css } from 'styled-components';

export type ImageProps = {
  src?: string;
};

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 88px);
  display: flex;
  justify-content: center;
  .content {
    width: 1200px;
    height: inherit;
    display: flex;
    flex-direction: column;
    padding: 30px 0 77px 0;
    h4 {
      cursor: pointer;
    }
    ${({ theme }) => css`
      @media (max-width: ${theme.breakpoint.laptop}) {
        width: 100vw;
        padding: 0;
        h4 {
          display: none;
        }
      }
    `};
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  .info {
    width: 462px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .info-title {
      h3 {
        margin: 18px 0 8px 0;
      }
    }

    .info-comment {
      h6 {
        margin-bottom: 8px;
      }
    }
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoint.laptop}) {
      padding: 32px 16px 32px 16px;
      justify-content: center;
      text-align: center;

      .info {
        height: fit-content;
        justify-content: flex-start;
        button {
          display: none;
        }
      }

      .info-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        h3 {
          font-size: 20px;
          text-align: center;
        }
      }

      .info-price {
        display: none;
      }

      .info-comment {
        margin-bottom: 70px;
      }
    }
  `};
`;

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-top: 1px;
  }
  width: 100%;
  justify-content: space-between;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoint.laptop}) {
      width: 300px;
      & > small:nth-child(7) {
        display: none;
      }
      & > span:nth-child(6) {
        display: none;
      }
    }
  `};
`;

export const BreadCrumbContainer = styled.div`
  small {
    margin-right: 8px;
  }
  align-items: center;
  font-weight: 900;
`;

export const MobileButtonContainer = styled.div`
  display: none;
  position: fixed;
  width: 100vw;
  height: 80px;
  bottom: 0;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 -5px 5px 0 #00000010;
  div {
    text-align: start;
    display: flex;
    flex-direction: column;
    & > small:first-child {
      width: 48px;
      position: absolute;
      top: -7px;
    }
    & > small:nth-child(2) {
      text-align: start;
    }
  }
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoint.laptop}) {
      display: flex;
      background-color: ${theme.color.structure.white};
    }
  `};
`;

export const AddButton = styled.div`
  font-size: 24px;
  font-family: Lato;
  color: ${({ theme }) => theme.color.structure.white};
  width: 328px;
  height: 56px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.functional.success.default};
  display: flex;
  align-items: center;
  .count-button {
    button {
      font-weight: 600;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 2px;
    }
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-right: 2px solid ${({ theme }) => theme.color.structure.white};
  }
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoint.laptop}) {
      display: none;
    }
  `};
`;

export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    background-image: url(${src});
    height: 580px;
    width: 640px;
    /* background-color: pink; */
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  `}
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoint.laptop}) {
      display: none;
    }
  `};
`;

export const SmallImage = styled.div<ImageProps>`
  ${({ src }) => css`
    background-image: url(${src});
    height: 333px;
    width: 218px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    display: none;
    margin: 16px 0;
  `}
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoint.laptop}) {
      display: block;
    }
  `};
`;

export const Flag = styled.div<ImageProps>`
  ${({ src }) => css`
    background-image: url(${src});
    height: 16px;
    width: 16px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  `}
`;
