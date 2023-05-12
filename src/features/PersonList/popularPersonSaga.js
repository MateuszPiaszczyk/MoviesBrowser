import { call, put, takeLatest } from "redux-saga/effects";
import { getPopularPerson } from "./getPopularPerson";
import {
  fetchPopularPerson,
  fetchPopularPersonError,
  fetchPopularPersonSuccess,
} from "./popularPersonSlice";

function* fetchPopularPersonHandler() {
  try {
    const popularPersonList = yield call(getPopularPerson);
    yield put(fetchPopularPersonSuccess(popularPersonList));
  } catch (error) {
    yield put(fetchPopularPersonError());
    yield call(alert, "Download failed.");
  }
}

export function* popularPersonSaga() {
  yield takeLatest(fetchPopularPerson, fetchPopularPersonHandler);
}
