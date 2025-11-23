/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios, { type AxiosInstance } from "axios";

const JSON_SERVER_1 =
  import.meta.env.VITE_JSON_SERVER_1 || "http://localhost:4001";
const JSON_SERVER_2 =
  import.meta.env.VITE_JSON_SERVER_2 || "http://localhost:4002";

// Create a custom axios instance type that returns data directly
interface CustomAxiosInstance
  extends Omit<AxiosInstance, "get" | "post" | "put" | "delete" | "patch"> {
  get<T = any>(url: string, config?: any): Promise<T>;
  post<T = any>(url: string, data?: any, config?: any): Promise<T>;
  put<T = any>(url: string, data?: any, config?: any): Promise<T>;
  delete<T = any>(url: string, config?: any): Promise<T>;
  patch<T = any>(url: string, data?: any, config?: any): Promise<T>;
}

export const api1 = Axios.create({
  baseURL: JSON_SERVER_1,
}) as CustomAxiosInstance;

export const api2 = Axios.create({
  baseURL: JSON_SERVER_2,
}) as CustomAxiosInstance;

api1.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

api2.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);
