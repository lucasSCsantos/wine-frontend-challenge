import styled from 'styled-components';

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
  }
`;

export const Nav = styled.ul`
  display: flex;
  margin-left: 84px;
  width: 480px;
  align-items: center;
  justify-content: space-between;
`;

export const NavLinkContainer = styled.div`
  cursor: pointer;
`;
