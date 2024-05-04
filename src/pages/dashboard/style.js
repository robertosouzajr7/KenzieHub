import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: flex-end;
  padding: 10px;
  padding-right: 30px;

  & button {
    width: 120px;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  text-align: left;
  align-items: center;

  .containerUser {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
  }

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .iconAdd {
    width: 50px;
    height: 80px;
  }

  .iconAdd:hover {
    width: 50px;
    height: 80px;
    zoom: 1.01;
    color: var(--Color-primary);
  }

  .containerTech {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  ul {
    background-color: #212529;
    display: flex;
    flex-direction: column;
    max-width: 780px;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    border-radius: 4px;
    box-sizing: border-box;

    & li {
      display: flex;
      background-color: #121214;
      max-width: 730px;
      width: 100%;
      height: 49px;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      border-radius: 4px;
      margin: 5px;
    }
  }
`;

export const Modal = styled.div`
  visibility: ${(props) => props.visibility || "hidden"};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: absolute;
  margin: 0 auto;
  top: 20px;
  justify-content: center;

  form {
    gap: 5px;
    display: flex;
    flex-direction: column;
  }

  .iconClosed {
    position: relative;
    width: 50px;
    height: 50px;
    left: 319px;
    top: -79px;
  }
`;
