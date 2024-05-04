import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  /*Colors*/
  --Color-primary: #ff577f;
  --Color-primary-50: #ff427f;
  --Color-primary-Disable: #59323f;

  /*Gray Scale*/

  --grey-4: #121214;
  --grey-3: #212529;
  --grey-2: #343b41;
  --grey-1: #868e96;
  --grey-0: #f8f9fa;
  --Sucess: #3fe864;
  --Negative: #e83f5b;
}

body{
  display: flex;
  flex-direction: column;
  width: 100%;
}

main{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background-color: #121214;
  width: 100%;
  color: var(--grey-0);
  box-sizing: border-box;
}
.Title1 {
  font-size: 16px;
  font-family: "Inter";
  font-weight: bold;
  color: var(--grey-0);
  text-align: center;
}

.Title2 {
  font-size: 16px;
  font-family: "Inter";
  font-weight: bold;
  color: var(--grey-0);
  text-align: center;
}

.Title3 {
  font-size: 16px;
  font-family: "Inter";
  font-weight: bold;
  color: var(--grey-0);
}

.Headline {
  font-size: 12px;
  font-family: "Inter";
  font-weight: 400;
  color: var(--grey-1);
  text-align: center;
}

.Disable {
  height: 48px;
  background-color: var(--grey-1);
  color: var(--grey-0);
  border-radius: 4px;
  font-family: "Inter";
  border: none;
}

Button:hover {
  height: 48px;
  background-color: var(--Color-primary-50);
  color: var(--grey-0);
  border-radius: 4px;
  font-family: "Inter";
}

.divLogo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.logo {
  width: 144px;
  margin: 15px;
}

button{
  height: 48px;
  background-color: var(--Color-primary);
  color: var(--grey-0);
  border-radius: 4px;
  font-family: "Inter";
  border: none;
}

.btnVoltar {
  width: 70px;
  justify-content: right;
  margin-left: 150px;
}

.iconEye {
  position: relative;
  right: -330px;
  top: -44px;
  width: 21px;
  cursor: pointer;
}

input{
  height: 48px;
  background-color: var(--grey-2);
  color: var(--grey-0);
  border-radius: 4px;
  font-family: "Inter";
  border: 1.22px solid var(--grey-0);
  padding-left: 15px;
}

form{
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 0 auto;
  background-color: var(--grey-3);
  color: var(--grey-0);
  box-sizing: border-box;
  padding: 20px;
  border-radius: 8px;
  text-align: left;
  margin-top: 100px;
}

select{
  height: 48px;
  background-color: var(--grey-2);
  color: var(--grey-0);
  border-radius: 4px;
  font-family: "Inter";
  border: 1.22px solid var(--grey-0);
  padding-left: 15px;
}

header{
  display: flex;
  position: fixed;
  z-index: 100;
  justify-content: flex-start;
  background-color: #121214;
  width: 100%;
  color: var(--grey-0);
  box-sizing: border-box;
  margin-bottom: 50px;
}

footer{
  display: flex;
  justify-content: flex-start;
  background-color: #121214;
  width: 100%;
  color: var(--grey-0);
  box-sizing: border-box;
}

@media (min-width:400px) and (max-width: 720px) {

  main{
    min-width: 400px;
  }

  form{
    width: 400px;
  }

  

}

`;
