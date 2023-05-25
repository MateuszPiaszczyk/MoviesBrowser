import { key, url } from "../../../core/apiCodes";
export const searchMovie = async ({ query, page }) => {
    const response = await fetch(
      `${url}/search/movie?api_key=${key}&language=en-US&query=${query}&page=${page}&include_adult=false`
    );
    if (!response.ok) {
      new Error(response.statusText);
    }
  
    return await response.data;
  };