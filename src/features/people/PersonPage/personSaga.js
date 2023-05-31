import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getPerson, getPersonCredits } from "./getPersonApi";
import {
  selectPersonId, 
  getPersonId, 
  fetchPersonDetailsError, 
  fetchPersonDetailsSuccess
} from "./personSlice";

function* fetchPersonDetailsHandler() {
  try {
    yield delay(1000);
    const personId = yield select(selectPersonId);
    const details = yield call(getPerson, { personId: personId });
    const credits = yield call(getPersonCredits, { personId: personId });

    console.log("fetchPersonDetailsSuccess:", details, credits); // Dodaj ten console.log

    yield put(fetchPersonDetailsSuccess({ details, credits }));
  } catch (error) {
    console.log("fetchPersonDetailsError:", error); // Dodaj ten console.log

    yield put(fetchPersonDetailsError());
  }
}


export function* personDetailsSaga() {
  yield takeLatest(getPersonId.type, fetchPersonDetailsHandler);
}