import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQueryParameter } from "../../queryParameters";
import { fetchMovieDetails, selectMovieDetails, selectMovieDetailsStatus,} from "./movieDetailsSlice";
import { ErrorPage } from "../../../common/ErrorPage";

export const MovieDetails = () => {
    const dispatch= useDispatch();
    const { id } = useParams(id);
    const movieInfo = useSelector(selectMovieDetails);
    const query = useQueryParameter("search")

    useEffect(() => {
        if (id) {
            dispatch(fetchMovieDetails(id))
        }
    }, [dispatch]);

    const status = useSelector(selectMovieDetailsStatus)
    if (status ==="error") return <ErrorPage />
    
    return (
        <>
        
        </>
    )
}
