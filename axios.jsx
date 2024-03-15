import axios from "axios";
import { ENV } from "./Env.jsx";

const instance = axios.create({
  baseURL: ENV.BASE_URL,
});

instance.interceptors.request.use((config) => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGFlNjk0MjU1MTA4ZWQ1M2JlMTJhYzMxYzc4ZGRiZCIsInN1YiI6IjY1ZjM3M2Q4ODgwNTUxMDE4NDBlMGE4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LQ7E-CxfCPTwva3QUhzb-NjWmR9eCEPmmByVmyAoUgo";
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export { instance };
