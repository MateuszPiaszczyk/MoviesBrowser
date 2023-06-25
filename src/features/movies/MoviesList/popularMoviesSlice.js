import { createSlice } from "@reduxjs/toolkit";

const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState: {
    page: 1,
    totalPages: 0,
    movies: [],
    genres: [],
    status: "loading",
    query: "",
    totalResults: 0,
  },
  reducers: {
    fetchMoviesListSuccess: (state, { payload: movies }) => {
      state.status = "loading";
      state.movies = movies.data.results;
      state.genres = movies.genres;
      state.totalPages =
        movies.data.total_pages > 500 ? 500 : movies.data.total_pages;
      state.status = "success";
      state.totalResults = movies.data.total_results;
    },
    fetchMoviesListError: (state) => {
      state.status = "error";
    },
    goToPage: (state, { payload: movies }) => {
      state.status = "loading";
      state.page = movies.page;
    },
    setQuery: (state, { payload }) => {
      state.query = payload.query;
      state.status = "loading";
    },
  },
});

export const {
  fetchMoviesListSuccess,
  fetchMoviesListError,
  goToPage,
  setQuery,
} = popularMoviesSlice.actions;

export const selectStatePopularMovies = (state) => state.popularMovies;
export const selectPopularMovies = (state) =>
  selectStatePopularMovies(state).movies;
export const selectGenres = (state) => selectStatePopularMovies(state).genres;
export const selectStatus = (state) => selectStatePopularMovies(state).status;
export const selectPage = (state) => selectStatePopularMovies(state).page;
export const selectTotalPages = (state) =>
  selectStatePopularMovies(state).totalPages;
export const selectQuery = (state) => selectStatePopularMovies(state).query;
export const selectTotalResults = (state) =>
  selectStatePopularMovies(state).totalResults;

export default popularMoviesSlice.reducer;
