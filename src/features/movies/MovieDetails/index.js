import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieId, selectCast, selectCrew, selectDetails, selectMovie, selectStatus } from "./movieDetailsSlice";
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
  const movie = useSelector(selectMovie)

  useEffect(() => {
    dispatch(getMovieId({ movieId: id }));
  }, [id, dispatch]);
  
  if (status !== "success") {
    return <Loading />;
  }
  return (
<MovieDetailsTile
poster={movie.poster_path}
/>
  )
}
