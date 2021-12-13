import styled, { css } from 'styled-components';

export type ImageProps = {
  src?: string;
};

export const Container = styled.div`
  /* background-color: red; */
  width: 100vw;
  height: calc(100vh - 88px);
  display: flex;
  justify-content: center;
  .content {
    width: 1200px;
    height: inherit;
    display: flex;
    /* background-color: green; */
    flex-direction: column;
    padding: 30px 0 77px 0;
    ${({ theme }) => css`
      @media (max-width: ${theme.breakpoint.laptop}) {
        justify-content: center;
        width: 100vw;
      }
    `};
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  padding-top: 25px;
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
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const BreadCrumbContainer = styled.div`
  small {
    margin-right: 8px;
  }
  align-items: center;
  font-weight: 900;
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
