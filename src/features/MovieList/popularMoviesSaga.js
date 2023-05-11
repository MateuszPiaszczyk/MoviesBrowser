import { call, delay, put, takeLatest } from "redux-saga/effects";
import { popularMovies } from "./popularMovies";
import {
  fetchPopularMovies,
  fetchPopularMoviesError,
  fetchPopularMoviesSuccess,
} from "./popularMoviesSlice";

function* fetchPopularMoviesHandler() {
  try {
    const popularMoviesList = yield call(popularMovies);
    yield delay(1000);
    yield put(fetchPopularMoviesSuccess(popularMoviesList));
  } catch (error) {
    yield put(fetchPopularMoviesError());
    yield call(alert, "Download failed");
  }
}

export function* popularMoviesSaga() {
  yield takeLatest(fetchPopularMovies, fetchPopularMoviesHandler);
}
