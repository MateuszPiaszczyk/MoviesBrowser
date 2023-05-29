import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "ae7d4af255a05506e1ed3b49e48b0d5c";

export const getGenres = async () => {
  const response = await axios.get(
    `${URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.data.genres;
};