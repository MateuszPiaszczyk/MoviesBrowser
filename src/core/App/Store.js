import popularMoviesReducer from "../../features/MovieList/popularMoviesSlice";
import rootSaga from "../App/rootSaga";
import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {},
  reducer: {
    popularMovies: popularMoviesReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
export default store;
