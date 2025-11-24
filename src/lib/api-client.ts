import Axios from "axios";

const JSON_SERVER_1 =
  import.meta.env.VITE_JSON_SERVER_1 || "http://localhost:4001";
const JSON_SERVER_2 =
  import.meta.env.VITE_JSON_SERVER_2 || "http://localhost:4002";

export const api1 = Axios.create({
  baseURL: JSON_SERVER_1,
});

export const api2 = Axios.create({
  baseURL: JSON_SERVER_2,
});
