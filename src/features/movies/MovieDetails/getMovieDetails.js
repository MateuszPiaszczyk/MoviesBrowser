import axios from "axios";
 const URL = `https://api.themoviedb.org/3`;
 const API_KEY = "ae7d4af255a05506e1ed3b49e48b0d5c";


 export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`
  ${URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  if (!response.ok) {
   new Error(response.statusText);
  }
return await response.data
  };


  export const getMovieCredits = async (movieId) => {
    const response = await axios.get(`
    ${URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    if (!response.ok) {
    throw new Error(response.statusText);
    }
    return response.data;
    };

