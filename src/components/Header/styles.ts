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
  .content {
    display: flex;
    width: 62.5%;
    align-items: center;
    justify-content: space-between;
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
