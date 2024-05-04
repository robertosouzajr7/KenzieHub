import styled from "styled-components";
export const Navebar = styled.nav`
  display: flex;
  margin: 20px auto;
  justify-content: flex-end;
  align-items: center;
  background-color: #121214;
  width: 80%;
  gap: 20px;
  height: 50vh;
  color: var(--grey-0);
  box-sizing: border-box;
  list-style: none;
  text-decoration-line: none;

  @media (min-width: 400px) and (max-width: 720px) {
    min-width: 400px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  button {
    width: 80px;
  }
`;
