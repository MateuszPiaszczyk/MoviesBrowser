import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import popularMoviesReducer from "../features/MoviesList/popularMoviesSlice";
import popularPeopleReducer from "../features/PeopleList/popularPeopleSlice"
import rootSaga from "./rootSaga";
import genresReducer from "../features/MoviesList/Genres/genresSlice";
import movieDetailsReducer from "../features/MoviesList/MovieDetails/movieDetailsSlice"


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    popularMovies: popularMoviesReducer,
    genres: genresReducer,
    popularPeople: popularPeopleReducer,
    movieDetails: movieDetailsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
