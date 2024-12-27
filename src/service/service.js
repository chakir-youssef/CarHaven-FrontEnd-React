// service.js
import axios from "axios";

const BASE_URL = "https://carhaven-backend-springboot-production.up.railway.app/cars";

export const addCars = async (newCar) => {
  try {
    const response = await axios.post(`${BASE_URL}`, newCar);
    return response.data;
  } catch (error) {
    console.error("Error add car:", error);
    throw error;
  }
};

export const getData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw error;
  }
};
