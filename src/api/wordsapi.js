import axios from "axios";

const API_BASE = "https://localhost:7034/api/words"; // backend adresin

export const getWords = async () => {
  const res = await axios.get(API_BASE);
  return res.data;
};

export const addWord = async (word) => {
  const res = await axios.post(API_BASE, { word });
  return res.data;
};

export const deleteWord = async (id) => {
  await axios.delete(`${API_BASE}/${id}`);
};
