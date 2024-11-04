import { API } from "../../api/api";
import { setUser, setLoginSuccess, setLogout } from "./clientActions";
import { setRoles } from "./globalActions";

export const getRoles = async () => {
  try {
    const res = await API.get("/roles");
    return res.data;
  } catch (err) {
    console.error("Error fetching roles:", err);
    return [];
  }
};

export const checkAuth = () => async (dispatch) => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const response = await API.get("verify", {
        headers: {
          Authorization: token,
        },
      });

      console.log("Verification response:", response.data);

      if (response.data) {
        const data = response.data;

        dispatch(
          setUser({
            name: data.name,
            email: data.email,
            isLoggedIn: true,
          })
        );

        const roles = await getRoles();
        const role = roles.find((role) => role.id === data.role_id);
        dispatch(setRoles(role));
        console.log("Roles set:", role);

        localStorage.setItem("token", data.token);

        dispatch(setLoginSuccess(token));
        console.log("Login success with token:", token);
      } else {
        dispatch(setLogout());
        console.log("Token invalid, logging out.");
      }
    } catch (error) {
      console.error("Token verification failed:", error);
      dispatch(setLogout());
    }
  } else {
    dispatch(setLogout());
    localStorage.removeItem("token");
    console.log("No token found, logging out.");
  }
};

export const getCategories = async () => {
  try {
    const response = await API.get("/categories");
    console.log(response);
    return response.data;
  } catch (err) {
    return [];
  }
};
