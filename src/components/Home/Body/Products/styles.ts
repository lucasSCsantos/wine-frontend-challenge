import styled, { css } from 'styled-components';

export type ImageProps = {
  src?: string;
};

export const Container = styled.div`
  background-color: pink;
  height: inherit;
  width: 78%;
`;

export const ProductContainer = styled.div`
  background-color: white;
  width: 256px;
  height: 333px;
  box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  img {
    /* height: 178.1292724609375px; */
    width: 191px;
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
