import { Actions } from "./types";
import axios, { AxiosInstance } from "axios";

// environment variables
const { MONGO_API_KEY, MONGO_APP_ID, MONGO_CLUSTER_NAME, MONGO_DATABASE } =
  process.env;

// Axios config
const mongoApiBaseUrl = `https://data.mongodb-api.com/app/${MONGO_APP_ID}/endpoint/data/v1/action`;
const axiosInstance: AxiosInstance = axios.create({
  baseURL: mongoApiBaseUrl,
  method: "post",
  headers: {
    "Content-Type": "application/json",
    "api-key": `${MONGO_API_KEY}`,
  },
});

// Axios requests
export const postRequest =
  <D, R>(action: `${Actions}`) =>
  async (collection: string, extraData?: D) => {
    try {
      const { data } = await axiosInstance.post<R>(action, {
        collection,
        dataSource: MONGO_CLUSTER_NAME,
        database: MONGO_DATABASE,
        ...extraData,
      });
      return data;
    } catch (error) {
      return error;
    }
  };
