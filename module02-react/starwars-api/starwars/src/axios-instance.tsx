import Axios, { AxiosInstance } from "axios";

// base url for requests
const URL = "https://swapi.dev/api";

// this is the instance that will be used for the http requests between the app and the API
export const getAxiosInstance = (): AxiosInstance => {
  let instance = Axios.create({ baseURL: URL });
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      const { status } = error.response;
      if (status > 399) console.info(`API Error: ${status}`);
    }
  );
  return instance;
};