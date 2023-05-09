import { createSlice } from "@reduxjs/toolkit";

const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState: {
    movieList: null,
    status: "null",
  },

  reducers: {
    fetchPopularMovies: (page) => ({
      status: "loading",
      popularMoviesList: null,
      page,
    }),
    fetchPopularMoviesSuccess: ({ payload: popularMoviesList }) => ({
      status: "success",
      popularMoviesList,
      page: popularMoviesList.page,
    }),
    fetchPopularMoviesError: () => ({
      status: "error",
      movieList: null,
    }),
  },
});

export const {
  fetchPopularMovies,
  fetchPopularMoviesError,
  fetchPopularMoviesSuccess,
} = popularMoviesSlice.actions;

export const selectStatePopularMovies = (state) => state.popularMovies;
export const selectPopularMoviesStatus = (state) =>
  selectStatePopularMovies(state).status;
export const selectPopularMoviesList = (state) =>
  selectStatePopularMovies(state).popularMoviesList;

export default popularMoviesSlice.reducer;
