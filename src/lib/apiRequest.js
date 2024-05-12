import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://estate-server-oxyg.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;