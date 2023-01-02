import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  z-index: 101;

  .overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #00000030;
  }

  .content {
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      background-color: var(--grey-2);
      span {
        cursor: pointer;
        color: var(--grey-0);
        font-size: 15px;
      }
    }
  }
`;

export default Container;
