import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import popularMoviesReducer from "../features/MoviesList/popularMoviesSlice";
import popularPeopleReducer from "../features/PeopleList/popularPeopleSlice"
import rootSaga from "./rootSaga";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    popularMovies: popularMoviesReducer,
    popularPeople: popularPeopleReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
