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

export const MoviesList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, []);

  const status = useSelector(selectPopularMoviesStatus);
  const fetchResult = useSelector(selectPopularMoviesList);
  if (status === "success") {
    console.log(fetchResult.results);

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
              />
            </div>
          ))}
        </List>
      </Container>
    );
  }
};
