import { API } from "../../api/api";

export const getRoles = () => {
  return API.get("/roles")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error("Error fetching roles:", err);
    });
};
