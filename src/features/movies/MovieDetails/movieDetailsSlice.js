import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
  status: "loading",
  movieId: 0,
  credits: [],
  details: [],
  },

  reducers: {

    fetchMovieDetailsSuccess: (state, { payload: movie }) => {
      state.status = "success";
      state.details = movie.details;
      state.credits = movie.credits;
    },
    fetchMovieDetailsError: (state) => {
      state.status= "error";
    },
    getMovieId: (state, { payload }) => {
      state.status = "loading";
      state.movieId = payload.movieId;
    },
  },
});

export const {
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  getMovieId,
} = movieDetailsSlice.actions;

export const selectMovieState = (state) => state.movieDetails;
export const selectStatus = (state) => selectMovieState(state).status;
export const selectDetails = (state) => selectMovieState(state).details;
export const selectCredits = (state) => selectMovieState(state).credits;
export const selectMovieId = (state) => selectMovieState(state).movieId;
export const selectCrew = (state) => selectMovieState(state).crew;
export const selectCast = (state) => selectMovieState(state).cast;
export const selectMovie = state => selectMovieState(state).movie;


export default movieDetailsSlice.reducer;
