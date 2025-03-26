import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/items/";

export const fetchItems = async (search = "") => {
  const response = await axios.get(`${API_URL}?search=${search}`);
  return response.data;
};

export const createItem = async (itemData) => {
  const response = await axios.post(API_URL, itemData);
  return response.data;
};

export const updateItem = async (id, itemData) => {
  const response = await axios.put(`${API_URL}${id}/`, itemData);
  return response.data;
};

export const deleteItem = async (id) => {
  await axios.delete(`${API_URL}${id}/`);
};
export const fetchGroupedItems = async () => {
    try {
      const response = await axios.get(`${API_URL}bucket_by_category/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching grouped items:", error);
      return [];
    }
  };