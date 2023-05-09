import { all } from "redux-saga/effects";
import { popularMoviesSaga } from "../../features/MovieList/popularMoviesSaga";

export default function* rootSaga() {
  yield all([popularMoviesSaga()]);
}
