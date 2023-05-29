import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  getMovieId,
  selectCast,
  selectCrew,
  selectDetails,
  selectMovieState,
  selectStatus,
} from "./movieDetailsSlice";
import { MainHeader } from "../../../common/MainHeader";
import { ErrorPage } from "../../../common/ErrorPage";
import { MovieDetailsTile } from "../../../common/DetailsTiles";
import { Loading } from "../../../common/Loading";
import { Backdrop } from "./Backdrop";
import { Subtitle } from "../../../common/Title";
import { PersonTile } from "../../../common/PersonTile";
import { List, Item } from "./styled";
import { NoResult } from "../../../common/NoResult";
import { getMovieCredits } from "./getMovieDetails";

export const MovieDetails = () => {
  const dispatch = useDispatch();
  const { movieId } = useParams();

  useEffect(() => {
    console.log("movieId:", movieId);
    const fetchData = async () => {
      try {
        dispatch(getMovieId(movieId)); // Wywołaj akcję pobrania prawidłowego identyfikatora filmu
        dispatch(fetchMovieDetails()); // Wywołaj akcję rozpoczęcia pobierania szczegółów filmu
      } catch (error) {
        console.error(error);
        dispatch(fetchMovieDetailsError());
      }
    };

    fetchData();
  }, [dispatch, movieId]);

  const movieDetails = useSelector(selectMovieState);
  const cast = useSelector(selectCast);
  const crew = useSelector(selectCrew);
  const status = useSelector(selectStatus);
  const details = useSelector(selectDetails);

  if (status === "loading") {
    return <Loading />;
  }
  if (status === "error") {
    return <ErrorPage />;
  }
  if (status === "noresult") {
    return <NoResult />;
  }
  return (
    <>
      {details.backdrop_path && (
        <Backdrop
          background={details.backdrop_path}
          title={details.original_title}
          vote={details.vote_average}
          votes={details.vote_count}
        />
      )}
      <MainHeader>
        <>
          <MovieDetailsTile
            poster={details.poster_path}
            title={details.original_title}
            year={details.release_date}
            genres={details.genres}
            vote={details.vote_average}
            votes={details.vote_count}
            overview={details.overview}
            production={details.production_countries}
            release={details.release_date}
          />
        </>
      </MainHeader>
    </>
  );
};
