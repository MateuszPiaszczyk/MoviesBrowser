import axios from "axios";
 const url = "https://api.themoviedb.org/3";
 const key = "ae7d4af255a05506e1ed3b49e48b0d5c";


export const getMovieDetails = async ( movieID ) => {
  const response = await axios.get(
    `${url}/movie/${movieID.id}?api_key=${key}&language=en-US`
  );
  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.data;
};


export const getMovieCredits = async (movieId ) => {
  const response = await axios.get(
    `${url}/movie/${movieId}/credits?api_key=${key}&language=en-US`
  );
  if (!response.ok) {
    new Error(response.statusText);
  }
  return await response.data;
};