/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: inherit;
  width: 31%;
  padding-top: 38px;
  h4 {
    margin-bottom: 32px;
  }
  p {
    margin-bottom: 16px;
  }
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoint.laptop}) {
      display: none;
    }
  `}
`;

export const FilterContainer = styled.div`
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
