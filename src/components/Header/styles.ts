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
        }
      `}
  `}
  display: flex;
  margin-left: 84px;
  align-items: center;
`;

export const NavLinkContainer = styled.li`
  img {
    width: 56px;
    height: 56px;
  }
  cursor: pointer;
`;
