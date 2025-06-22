import axios from "axios";

// const apiRequest = axios.create({
//   baseURL: "https://estate-server-oxyg.onrender.com/api",
//   withCredentials: true,
// });
const apiRequest = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export default apiRequest;