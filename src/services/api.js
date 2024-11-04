import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost/back-end/public",
});

export default api;