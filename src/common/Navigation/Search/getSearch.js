import axios from "axios";

const API_KEY = "ae7d4af255a05506e1ed3b49e48b0d5c";
const API_URL = "https://api.themoviedb.org/3";

export const searchMovie = async ({ query, page }) => {
  const response = await axios.get(
    `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
  );
  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.data;
};

export const searchPeople = async ({ page, query }) => {
  const response = await axios.get(
    `${API_URL}/search/person?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
  );
  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.data;
};
