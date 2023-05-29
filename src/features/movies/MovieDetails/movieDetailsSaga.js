import { select, call, put } from "redux-saga/effects";
import {
  selectMovieId,
  fetchMovieDetailsError,
  fetchMovieDetailsSuccess,
  getMovieId,
} from "./movieDetailsSlice";
import { getMovieDetails, getMovieCredits } from "./getMovieDetails";

export function* movieDetailsSaga() {
  try {
    const id = yield select(selectMovieId);
    if (!id || id === 0) {
      // Jeśli movieId jest puste lub nieprawidłowe, pobierz poprawne id przed pobraniem szczegółów
      yield put(getMovieId()); // Wywołaj akcję pobrania prawidłowego identyfikatora filmu
    }
    const details = yield call(getMovieDetails, id);
    const credits = yield call(getMovieCredits, id);
    yield put(fetchMovieDetailsSuccess({ details, credits }));
  } catch (error) {
    yield put(fetchMovieDetailsError());
  }
}
