import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20vw;
  margin: 0 auto;
  @media (max-width: 1000px) {
    padding: 0 5vw;
  }

  nav,
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0;
  }

  nav {
    h1 {
      color: var(--color-primary);
    }

    button {
      background-color: var(--grey-2);
      padding: 10px 15px;
      transition: 0.4s;
    }
    button:hover {
      background-color: var(--grey-3);
    }
  }

  header {
    p {
      color: var(--grey-1);
    }
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;

    > div {
      display: flex;
      justify-content: space-between;
      button {
        background-color: var(--grey-4);
        font-size: 25px;
        color: var(--grey-0);
        transition: 0.3s;
        &:hover {
          background-color: var(--grey-3);
        }
      }
    }
  }
`;

export const StyledUl = styled.ul`
  background-color: var(--grey-3);
  border-radius: 5px;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 15px;
    padding: 20px;
    border-radius: 5px;

    background-color: var(--grey-4);
    transition: 0.3s;
    &:hover {
      background-color: var(--grey-2);
    }

    div {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    button {
      background-color: var(--grey-4);
      font-size: 20px;
    }
  }
`;
