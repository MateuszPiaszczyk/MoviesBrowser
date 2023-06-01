import { call, select, put, takeLatest } from "redux-saga/effects";
import {
  goToPage,
  fetchMoviesListError,
  fetchMoviesListSuccess,
  selectQuery,
  selectPage,
} from "./popularMoviesSlice";
import { searchMovie } from "../../../common/Navigation/Search/getSearch";
import { getGenres } from "../../../features/movies/Genres/getGenres";
import { popularMovies } from "../../../features/movies/MoviesList/getPopularMovies";

function* fetchPopularMoviesHandler() {
  try {
    const page = yield select(selectPage);
    const genres = yield call(getGenres);
    const query = yield select(selectQuery);
    let data;
    if (query !== "") {
      data = yield call(searchMovie, { page: page, query: query });
    } else {
      data = yield call(popularMovies, { page: page });
    }
    yield put(fetchMoviesListSuccess({ data, genres }));
  } catch (error) {
    yield put(fetchMoviesListError());
  }
}

export function* popularMoviesSaga() {
  yield takeLatest(goToPage.type, fetchPopularMoviesHandler);
}
