import axios from "axios";

const API_BASE_URL = (
  import.meta.env.VITE_API_URL || "https://mern-uniconnect-webapp.onrender.com/api"
).replace(/\/+$/, "");

const API = axios.create({
  baseURL: API_BASE_URL,
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
