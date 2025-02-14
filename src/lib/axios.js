import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://5q3nk5t4-5001.brs.devtunnels.ms/api" : "/api",
  withCredentials: true,
});
