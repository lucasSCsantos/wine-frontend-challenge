import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
		background-color: ${({ theme }) => theme.color.background};
    overflow-x: hidden;
  }

  img {
    width: 100%;
    max-width: 100%;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    max-width: 85rem;
    padding: 0 1rem;
    ${({ theme }) => css`
      @media (max-width: ${theme.breakpoint.desktop}) {
        max-width: 70rem;
      }
      @media (max-width: ${theme.breakpoint.laptop}) {
        max-width: 50rem;
      }
      @media (max-width: ${theme.breakpoint.tablet}) {
        padding: 0 2rem;
      }
      @media (max-width: ${theme.breakpoint.mobile}) {
      }
    `}
  }
`;
