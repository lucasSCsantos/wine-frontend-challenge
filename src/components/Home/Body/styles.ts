import styled from 'styled-components';

const Container = styled.div`
  height: calc(100vh - 88px);
  width: 100vw;
  display: flex;
  justify-content: center;
  .content {
    width: 1200px;
    background-color: green;
    height: inherit;
    display: flex;
  }
`;

export default Container;
