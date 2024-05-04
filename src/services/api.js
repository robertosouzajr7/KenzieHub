import axios from "axios";
const Api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/",
  timeout: 5000,
});

console.log({ Api });

export default Api;
