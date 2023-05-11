import { useEffect } from "react";
import {
  fetchPopularMovies,
  selectPopularMoviesList,
  selectPopularMoviesStatus,
} from "./popularMoviesSlice";
import { useDispatch, useSelector } from "react-redux";

export const MovieList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, []);
  const status = useSelector(selectPopularMoviesStatus);
  const fetchResult = useSelector(selectPopularMoviesList);
  if (status === "success") {
    console.log(fetchResult.results);
    return (
      <>
        <div>
          <ul>
            {fetchResult.results.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </div>
      </>
    );
  }
};
