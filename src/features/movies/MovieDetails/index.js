import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieId, selectCast, selectCrew, selectDetails, selectStatus } from "./movieDetailsSlice";
import { MainHeader } from "../../../common/MainHeader";
import { ErrorPage } from "../../../common/ErrorPage";
import { MovieDetailsTile } from "../../../common/DetailsTiles";
import { Loading } from "../../../common/Loading";
import { Backdrop } from "./Background";
import { Subtitle } from "../../../common/Title";
import { PersonTile } from "../../../common/PersonTile";
import { List, Item } from "./styled";

export const MovieDetails = (poster, title, year, genres, vote, votes, overview, production, release) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const details = useSelector(selectDetails);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(getMovieId({ movieId: id }));
  }, [id, dispatch]);
  
  if (status !== "success") {
    return <Loading />;
  }
  return (
      <MovieDetailsTile 
      poster={poster ||details.poster_path}
      title={title || details.original_title}
      year={year ||details.release_date}
      genres={ genres ||details.genres}
      vote={vote ||details.vote_average}
      votes={votes || details.vote_count}
      overview={overview || details.overview}
      production={production || details.production_countries}
      release={release || details.release_date}
    />
  )
}
