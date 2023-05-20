import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../common/Container/styled";
import { MainHeader } from "../../common/MainHeader";
import { List } from "./styled";
import { useEffect } from "react";
import {
  fetchPopularMovies,
  selectPopularMoviesList,
  selectPopularMoviesStatus,
} from "./popularMoviesSlice";
import { MovieTile } from "../../common/MovieTile";
import { ErrorPage } from "../../common/ErrorPage";

import { Pagination } from "../../common/Pagination";

export const MoviesList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  const status = useSelector(selectPopularMoviesStatus);
  const fetchResult = useSelector(selectPopularMoviesList);
  if (status === "success") {
    
    if (status === "error") return <ErrorPage />
    return (
      <Container>
        <MainHeader 
          title="Popular Movies"
        />
        <List>
          {fetchResult.results.map((movie) => (
            <div key={movie.id}>
              <MovieTile 
              movie={movie} 
              id={movie.id}
              genres={movie.genre_ids}
              />
            </div>
          ))}
        </List>
        <Pagination />
      </Container>
    );
  }
};
