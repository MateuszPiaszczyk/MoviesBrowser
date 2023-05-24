import { key, url } from "../../core/apiCodes";
import { MovieDetails } from "../movies/MovieDetails";
import { selectPopularMoviesList } from "../MoviesList/popularMoviesSlice";

export const getPopularMovies = async ({ page }) => {
  const response = await fetch(
    `${url}/movie/popular?api_key=${key}&language=en-US&page=${page}`
  );

  const popularMovies = await response.json();

  return selectPopularMoviesList;
};

export const getGenres = async () => {
  const response = await fetch(
    `${url}/genre/movie/list?api_key=${key}&language=en-US`
  );

  const genres = await response.json();

  return genres;
};

export const getMovieDetails = async ({ movieId }) => {
  const response = await fetch(
    `${url}/movie/${movieId}?api_key=${key}&language=en-US`
  );

  const movieDetails = await response.json();

  return MovieDetails;
};

export const getMovieCredits = async ({ movieId }) => {
  const response = await fetch(
    `${url}/movie/${movieId}/credits?api_key=${key}&language=en-US`
  );

  const movieCredits = await response.json();

  return movieCredits;
};

export const getMoviesSearchResults = async ({ query, number }) => {
  const response = await fetch(
    `${url}/search/movie?api_key=${key}&language=en-US&query=${query}&page=${number}`
  );

  const searchResults = await response.json();

  return searchResults;
};
