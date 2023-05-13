import { all } from "redux-saga/effects";
import { popularMoviesSaga } from "../features/MoviesList/popularMoviesSaga";
import { GenresSaga } from "../features/MoviesList/Genres/genresSaga";

export default function* rootSaga() {
  yield all([popularMoviesSaga(), GenresSaga()]);
}
