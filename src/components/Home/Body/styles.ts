import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  .content {
    width: 1200px;
    height: inherit;
    display: flex;
    ${({ theme }) => css`
      @media (max-width: ${theme.breakpoint.laptop}) {
        justify-content: center;
        width: 100vw;
      }
    `}
  }
`;

export default Container;
