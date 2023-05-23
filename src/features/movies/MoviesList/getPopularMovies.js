import { key, ApiPopularMovies } from "../../../core/apiCodes";

export const popularMovies = async () => {
  try {
    const response = await fetch(
      `${ApiPopularMovies}?api_key=${key}&language=en-US&page=1`
    );
    if (!response.ok) {
      throw new Error("Not found movies.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};