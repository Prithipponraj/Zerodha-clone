// src/utils/decodeToken.js
import jwt_decode from "jwt-decode";

export const decodeToken = (token) => {
  try {
    if (!token) throw new Error("No token provided");

    const decoded = jwt_decode(token);
    return decoded; // Return the entire payload or specific fields like `decoded.email`
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};
