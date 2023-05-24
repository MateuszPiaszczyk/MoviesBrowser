import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    movieInfo: null,
    status: null,
  },

  reducers: {
    fetchMovieDetails: (_, { payload: movieId }) => ({
      movieInfo: "loading",
      status: null,
      movieId,
    }),
    fetchMovieDetailsSuccess: (_, { payload: movieInfo }) => ({
      status: "success",
      movieInfo,
    }),
    fetchMovieDetailsError: () => ({
      movieInfo: null,
      status: "error",
    }),
  },
});

export const {
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
} = movieDetailsSlice.actions;

export const selectMovieDetails = (state) => state.movieDetails;
export const selectMovieDetailsStatus = (state) =>
  selectMovieDetails(state).status;
export const selectMovieInfo = (state) => selectMovieDetails(state).movieInfo;
export const selectError = (state) => selectMovieDetails(state).error;

export default movieDetailsSlice.reducer;
