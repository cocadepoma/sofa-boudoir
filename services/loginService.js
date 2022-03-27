import API from "../api/api";

export const userLogin = async (email, password) => {
  try {
    const response = await API.post("/api/login", { email, password });
    return response.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};