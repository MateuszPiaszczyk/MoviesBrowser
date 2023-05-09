import popularMoviesReducer from "../../features/MovieList/popularMoviesSlice";
import rootSaga from "../App/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    popularMovies: popularMoviesReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
export default store;
