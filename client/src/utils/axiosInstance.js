import axios from "axios";

const api = axios.create({
  baseURL: "https://interxview-ai.onrender.com/api",
});

export default api;
