import { API_KEY, ApiPopularMovies } from "../../../core/apiCodes";

export const popularMovies = async () => {
  try {
    const response = await fetch(
      `${ApiPopularMovies}?api_key=${API_KEY}&language=en-US&page=1`
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
