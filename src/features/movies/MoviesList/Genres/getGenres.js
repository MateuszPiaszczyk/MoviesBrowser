import { key, url } from "../../../../core/apiCodes";

export const getGenres = async () => {
  try {
    const response = await fetch(`${url}genre/movie/list?api_key=${key}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const genres = await response.json();
    return genres;
  } catch (error) {
    console.error(error);
  }
};
