import { key, url, apiMovieDetails } from "../../core/apiCodes";

export const getMovieDetails = async (movieId) => {
    const response = await fetch(
      `${url}${apiMovieDetails}${movieId}?api_key=${key}`
    );
    if (!response.ok) {
      throw new Error("Not found movies.");
    }
    const data = await response.json()
    return data;
  }