// utils/checkUserRole.js

import axios from "axios";

export const checkUserRole = async () => {
  try {
    const response = await axios.get("/api1/checkRole");
    console.log("role",response.data.role);
    return response.data.role;
  } catch (error) {
    console.error("Error fetching user role:", error);
    return null;
  }
};
