import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  header {
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 30px 0;

    a {
      background-color: var(--grey-3);
      padding: 5px 10px;
      transition: 0.4s;
      :hover {
        background-color: var(--grey-1);
      }
    }
  }

  .title1 {
    color: var(--color-primary);
  }
  .title2 {
    margin: 0 auto;
  }
`;
