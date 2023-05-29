import { key, url, apiMovieDetails } from "../../../core/apiCodes";

export const getMovieDetails = async (movieId) => {
  const response = await fetch(`${url}/${apiMovieDetails}${movieId}?api_key=${key}&language=en-US`
  );
  if (!response.ok) {
    throw new Error("Not found movies.");
  }
  const data = await response.json()
  return data;
}


  export const getMovieCredits = async (movieId) => {
    const response = await fetch(`
    ${url}/${apiMovieDetails}/${movieId.id}/credits?api_key=${key}&language=en-US`
    );
    if (!response.ok) {
    throw new Error(response.statusText);
    }
    return response.data;
    };

