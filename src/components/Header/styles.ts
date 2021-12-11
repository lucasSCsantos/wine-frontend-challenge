import styled, { css } from 'styled-components';

export type NavProps = {
  text?: boolean;
  icon?: boolean;
};

export const Container = styled.header`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 88px;
  background-color: ${({ theme }) => theme.color.structure.white};
  border-bottom: 0.5px #cccccc solid;
  border-top: 0.5px #cccccc solid;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
  img {
    width: 100px;
    margin: 0;
  }
  .menu {
    img {
      width: 21px;
      height: 21px;
    }
    margin-right: 20px;
    cursor: pointer;
    display: none;
  }

  .content {
    display: flex;
    width: 62.5%;
    align-items: center;
    justify-content: space-between;
  }

  .active {
    transform: translateX(0);
    transition: 0.5s ease;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoint.desktop}) {
      .content {
        width: 80%;
      }
    }
    @media (max-width: ${theme.breakpoint.laptop}) {
    }
    @media (max-width: ${theme.breakpoint.tablet}) {
      .content {
        width: 90%;
      }
      .menu {
        display: block;
      }
    }
    @media (max-width: ${theme.breakpoint.mobile}) {
    }
  `}
`;

export const Nav = styled.ul<NavProps>`
  ${({ icon, text }) => css`
    ${() =>
      icon &&
      css`
        li {
          margin-left: 42px;
        }
      `}
    ${() =>
      text &&
      css`
        li {
          margin-right: 48px;
          &:hover {
            h3 {
              color: ${({ theme }) => theme.color.text.tannat} !important;
              transition: 0.2s ease;
            }
            border-bottom: 2px solid ${({ theme }) => theme.color.text.tannat};
          }
        }
        ${({ theme }) => css`
          @media (max-width: ${theme.breakpoint.desktop}) {
          }
          @media (max-width: ${theme.breakpoint.laptop}) {
          }
          @media (max-width: ${theme.breakpoint.tablet}) {
            position: absolute;
            top: 88px;
            width: 50vw;
            height: 92vh;
            margin-left: 0;
            background-color: ${theme.color.structure.white};
            flex-direction: column;
            align-items: center;
            justify-content: center;
            left: 0;
            transform: translateX(-100%);
            transition: 0.5s ease;
          }
          @media (max-width: ${theme.breakpoint.mobile}) {
          }
        `}
      `}
  `}
  display: flex;
  margin-left: 84px;
  align-items: center;
  height: 100%;
`;

export const NavLinkContainer = styled.li`
  img {
    width: 56px;
    height: 56px;
  }
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  border-bottom: 2px solid ${({ theme }) => theme.color.structure.transparent};
`;
