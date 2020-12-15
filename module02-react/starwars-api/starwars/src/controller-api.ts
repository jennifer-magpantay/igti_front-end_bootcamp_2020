import { getAxiosInstance } from "./axios-instance";

// this is the document that will control/hold all the http requests

//create an variable to hold all endpoints
// pass all schemas into this variable by using |
export type SWAPIEndPoint =
  | "people"
  | "films"
  | "starship"
  | "planets"
  | "vehicles"
  | "species";
  // ps: would it be better use an array instead ????

export function controller (endpoint: SWAPIEndPoint) {
  // adding the instance
  const axios = getAxiosInstance();
 
  // adding here your requests:
  const getSchema = async() => {
    const response = await axios.get(`/${endpoint}/schema`);
    return response.data;
  }
  const getById = async(id: number) => {
    const response = await axios.get(`/${endpoint}/${id}`);
    return response.data;
  }

  return {getSchema, getById}
};
