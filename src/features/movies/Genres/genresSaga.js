import { call, put, takeLatest } from "redux-saga/effects";
import { getGenres } from "./getGenres";
import {
  fetchGenres,
  fetchGenresSuccess,
  fetchGenresError,
} from "./genresSlice";

function* fetchGenresHandler() {
  try {
    const genres = yield call(getGenres);
    yield put(fetchGenresSuccess(genres));
  } catch (error) {
    yield put(fetchGenresError());
    yield call("Download failed.");
  }
}

export function* genresSaga() {
  yield takeLatest(fetchGenres, fetchGenresHandler);
}
