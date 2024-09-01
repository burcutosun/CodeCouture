import axios from "axios";

export const createApiInstance = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com",
    headers: token ? { Authorization: token } : {},
  });
};

export let API = createApiInstance();
//http://localhost:8000/ecommerce/v1/api
