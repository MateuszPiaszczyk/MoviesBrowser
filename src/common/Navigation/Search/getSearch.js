import { API_KEY, API_URL } from "../../../core/apiCodes";
export const searchMovie = async ({ query, page }) => {
    const response = await fetch(
      `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
    );
    if (!response.ok) {
      new Error(response.statusText);
    }
  
    return await response.data;
  };