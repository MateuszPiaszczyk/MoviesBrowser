import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQueryParameter } from "../../../queryParameters";
import { fetchMovieDetails, selectMovieDetails, selectMovieDetailsStatus, } from "./movieDetailsSlice";
import { ErrorPage } from "../../../common/ErrorPage";

export const MovieDetails = () => {
    const dispatch = useDispatch();
    const { movieId } = useParams();

    useEffect(() => {
        if (movieId) {
            dispatch(fetchMovieDetails({ id: movieId }))
        }
    }, [dispatch, movieId]);

    const movieInfo = useSelector((state) => selectMovieDetails(state));
    const query = useQueryParameter("search")

    const status = useSelector(selectMovieDetailsStatus)
    if (status === "error") return <ErrorPage />

    return (
        <>
        </>
    )
};
