import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:5000/",
  baseURL: "http://rifa-eev.herokuapp.com",
});

export default api;
