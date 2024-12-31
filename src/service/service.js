
import axios from "axios";

const BASE_URL = "https://carhaven-backend-springboot-production.up.railway.app";


export const addCars = async (newCar) => {
  try {
    const response = await axios.post(`${BASE_URL}/cars`, newCar);
    return response.data;
  } catch (error) {
    console.error("Error add car:", error);
    throw error;
  }
};

export const getData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/cars`);
    return response.data;
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw error;
  }
};
