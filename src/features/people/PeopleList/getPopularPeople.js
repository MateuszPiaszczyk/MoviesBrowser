import axios from "axios";
const API_KEY = "ae7d4af255a05506e1ed3b49e48b0d5c";
const API_URL = "https://api.themoviedb.org/3";

export const getPopularPeople = async ({ page }) => {
  const response = await axios.get(
    `${API_URL}/person/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.data;
};
