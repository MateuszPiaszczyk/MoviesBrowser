import { all } from "redux-saga/effects";
import { popularMoviesSaga } from "../features/MoviesList/popularMoviesSaga";
import { popularPeopleSaga } from "../features/PeopleList/popularPeopleSaga";

export default function* rootSaga() {
  yield all([
    popularMoviesSaga(),
    popularPeopleSaga(),
  ]);
}
