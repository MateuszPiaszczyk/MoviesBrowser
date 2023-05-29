import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    status: "idle",
    movieId: 0,
    credits: [],
    details: {},
    cast: [],
    crew: [],
  },
  reducers: {
    getMovieId: (state, action) => {
      console.log("movieId payload:", action.payload)
      state.movieId = action.payload;
    },
    fetchMovieDetails: (state) => {
      state.status = "loading";
    },
    fetchMovieDetailsSuccess: (state, action) => {
      state.status = "success";
      state.details = action.payload.details;
      state.credits = action.payload.credits;
    },
    fetchMovieDetailsError: (state) => {
      state.status = "error";
    },
  },
});

export const {
  getMovieId,
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
} = movieDetailsSlice.actions;

export const selectMovieState = (state) => state.movieDetails;
export const selectStatus = (state) => selectMovieState(state).status;
export const selectDetails = (state) => selectMovieState(state).details;
export const selectCredits = (state) => selectMovieState(state).credits;
export const selectMovieId = (state) => selectMovieState(state).movieId;
export const selectCast = (state) => selectMovieState(state).cast;
export const selectCrew = (state) => selectMovieState(state).crew;

export default movieDetailsSlice.reducer;
