import styled from "styled-components";

const Form = styled.form`
  background-color: var(--grey-3);
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  gap: 20px;
  width: 400px;

  @media (max-width: 600px) {
    width: 90vw;
  }

  input,
  select {
    background-color: var(--grey-2);
    padding: 10px;
  }

  p,
  input::placeholder {
    color: var(--grey-1);
  }

  button,
  a {
    text-align: center;
    padding: 15px;
    transition: 0.4s;
  }

  button {
    background-color: var(--color-primary);
  }

  button:hover {
    background-color: var(--color-primary-focus);
  }

  a {
    background-color: var(--grey-1);
  }

  a:hover {
    background-color: var(--grey-3);
  }
`;

export default Form;
