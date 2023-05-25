import { key, url,} from "../../../core/apiCodes";

export const getMovieDetails = async ({ movieId }) => {
  const response = await fetch(
    `${url}/movie/${movieId}?api_key=${key}&language=en-US`
  );
  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.data;
};


export const getMovieCredits = async ({ movieId }) => {
  const response = await fetch(
    `${url}/movie/${movieId}/credits?api_key=${key}&language=en-US`
  );
  if (!response.ok) {
    new Error(response.statusText);
  }
  return await response.data;
};