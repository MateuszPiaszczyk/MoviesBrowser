import axios from "axios";
import { key, url } from "../../../core/apiCodes";

export const getMovieDetails = async (movieId) => {
  console.log("getMovieDetails movieId:", movieId);
  try {
    const response = await axios.get(
      `${url}/movie/${movieId}?api_key=${key}&language=en-US`
    );
    if (response.status !== 200) {
      throw new Error(response.data.status_message);
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMovieCredits = async (movieId) => {
  console.log("getMovieCredits movieId:", movieId);
  try {
    const response = await axios.get(
      `${url}/movie/${movieId}/credits?api_key=${key}&language=en-US`
    );
    if (response.status !== 200) {
      throw new Error(response.data.status_message);
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
