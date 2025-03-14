import axios, { AxiosInstance } from "axios";

export const API_URL = `https://task-example.onrender.com`;

const axiosInstance: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});
export default axiosInstance;
