import { all } from "redux-saga/effects";
import { popularMoviesSaga } from "../features/MoviesList/popularMoviesSaga";

export default function* rootSaga() {
  yield all([popularMoviesSaga()]);
}
