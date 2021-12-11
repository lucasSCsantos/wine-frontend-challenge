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
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
  img {
    width: 100px;
    margin: 0;
  }
  .menu,
  .profile-mobile {
    cursor: pointer;
    display: none;
  }

  .profile-mobile img {
    width: 50px;
    height: 50px;
  }

  .menu img {
    width: 21px;
    height: 21px;
  }

  .content {
    display: flex;
    width: 1200px;
    align-items: center;
    justify-content: space-between;
  }

  .active {
    transform: translateX(0);
    transition: 0.5s ease;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoint.laptop}) {
      .content {
        padding: 10px;
        justify-content: space-between;
      }
      .menu,
      .profile-mobile {
        display: block;
      }
      .logo {
        position: absolute;
        left: 58px;
      }
      .profile {
        display: none;
      }
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
        ${({ theme }) => css`
          @media (max-width: ${theme.breakpoint.laptop}) {
            li {
              margin-left: 20px;
            }
          }
        `}
      `}
    ${() =>
      text &&
      css`
        li {
          margin-right: 48px;
          &:hover {
            h3 {
              color: ${({ theme }) => theme.color.text.tannat};
              transition: 0.2s ease;
            }
            border-bottom: 2px solid ${({ theme }) => theme.color.text.tannat};
          }
        }
        ${({ theme }) => css`
          @media (max-width: ${theme.breakpoint.laptop}) {
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
            transition: 0.2s ease;
            li {
              width: 100%;
              margin-right: 0;
              padding: 30px;
              &:hover {
                background-color: ${theme.color.text.tannat};
                transition: 0.5s ease;
                img {
                  filter: brightness(500%);
                }
                h3 {
                  color: ${theme.color.structure.white};
                }
              }
            }
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
