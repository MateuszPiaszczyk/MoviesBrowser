import { takeLatest, select, call, put } from "redux-saga/effects";
import {selectMovieId, getMovieId, fetchMovieDetailsError, fetchMovieDetailsSuccess} from "./movieDetailsSlice";
import { getMovieDetails, getMovieCredits } from "./getMovieDetails";

function* fetchMovieDetailsHandler() {
  try {
    const id = yield select(selectMovieId);
    const details = yield call(getMovieDetails, { movieId: id });
    const credits = yield call(getMovieCredits, { movieId: id });
    yield put(fetchMovieDetailsSuccess({ details, credits }));
  } catch (error) {
    yield put(fetchMovieDetailsError());
  }
}

export function* movieDetailsSaga() {
  yield takeLatest(getMovieId.type, fetchMovieDetailsHandler);
}
