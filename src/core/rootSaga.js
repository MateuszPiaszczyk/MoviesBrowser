import { all } from "redux-saga/effects";
import { popularMoviesSaga } from "../features/MoviesList/popularMoviesSaga";
import { genresSaga } from "../features/MoviesList/Genres/genresSaga";
import { popularPeopleSaga} from "../features/PeopleList/popularPeopleSaga";
export default function* rootSaga() {
  yield all([
    popularMoviesSaga(), 
    genresSaga(),
    popularPeopleSaga(),
  ]);
}
