import axios, { AxiosInstance } from "axios";

const config = {
  backend: {
    baseURL: process.env.NEXT_PUBLIC_BACKEND,
  },
};

const server = config.backend.baseURL;

const api: AxiosInstance = axios.create({
  baseURL: server,
  // headers: {
  //   Origin: "https://needromance.online",
  // },
  withCredentials: true,
});

export default api;
