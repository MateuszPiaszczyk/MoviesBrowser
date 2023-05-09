import { call, delay, put, takeLatest } from "redux-saga/effects";
import { popularMovies } from "./popularMovies";
import {
  fetchPopularMovies,
  fetchPopularMoviesError,
  fetchPopularMoviesSuccess,
} from "./popularMoviesSlice";

function* fetchPopularMoviesHandler({ payload }) {
  try {
    const moviesList = yield call(popularMovies, payload);
    yield delay(1000);
    yield put(fetchPopularMoviesSuccess(moviesList));
  } catch (error) {
    yield put(fetchPopularMoviesError());
    yield call("Download failed");
  }
}

export function* popularMoviesSaga() {
  yield takeLatest(fetchPopularMovies, fetchPopularMoviesHandler);
}
