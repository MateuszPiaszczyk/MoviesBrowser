import { key, ApiPopularMovies, url, apiMovieDetails } from "../../core/apiCodes";

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


export const getMovieDetails = async (id) => {
  const response = await fetch(
    `${url}${apiMovieDetails}${id}?api_key=${key}`
  );
  if (!response.ok) {
    throw new Error("Not found movies.");
  }
  const data = await response.json()
  return data;
}