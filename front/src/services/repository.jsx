import axios from "axios";
import { API_URL } from "../config/constants";

export const signInUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/users/signin`, data);
    const user = response.data.data;
    if (user && user._id) return user;
    else return { error: "Usuario no encontrado" };
  } catch (error) {
    console.error("Error:", error);
    return { error: error?.response?.data?.message || error.message };
  }
};
export const saveSpecialPrice = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/special_prices`, data);
    const { message } = response.data;
    return message;
  } catch (error) {
    console.error("Error:", error);
    return { error: error?.response?.data?.message || error.message };
  }
};
export const getProducts = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/products`, {
      headers: { "user-id": userId },
    });
    const { data, success, message } = response.data;
    if (data && success) return data;
    else return { error: message };
  } catch (error) {
    console.error("Error:", error);
    return { error: error?.response?.data?.message || error.message };
  }
};
export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products/all`);
    const { data, success, message } = response.data;
    if (data && success) return data;
    else return { error: message };
  } catch (error) {
    console.error("Error:", error);
    return { error: error?.response?.data?.message || error.message };
  }
};
