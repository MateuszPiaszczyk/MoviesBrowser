import { takeLatest, delay, call, put } from "redux-saga/effects";
import {
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
} from "./movieDetailsSlice";
import { getMovieDetails } from "./getMovieDetails";

function* fetchMovieDetailsHandler({ payload }) {
  try {
    const movieInfo = yield call(getMovieDetails, payload);
    yield delay(1000);
    yield put(fetchMovieDetailsSuccess(movieInfo));
  } catch (error) {
    yield put(fetchMovieDetailsError());
    yield call(alert, "Download failed");
  }
}

export function* movieDetailsSaga() {
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
}
