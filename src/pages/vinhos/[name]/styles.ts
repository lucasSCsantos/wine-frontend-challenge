import styled, { css } from 'styled-components';

export type ImageProps = {
  src?: string;
};

export const Container = styled.div`
  background-color: red;
  width: 100vw;
  height: calc(100vh - 88px);
  display: flex;
  justify-content: center;
  .content {
    width: 1200px;
    height: inherit;
    display: flex;
    background-color: green;
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
  background-color: blue;
  display: flex;
  padding-top: 25px;
  justify-content: space-between;
`;

export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    background-image: url(${src});
    height: 580px;
    width: 640px;
    background-color: pink;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  `}
`;
