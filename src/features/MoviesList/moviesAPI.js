import { url, key } from "../../core/apiCodes";

export const getMovies = async () => {
    const response = await fetch(
        `${url}/movie/poplar?api_key=${key}&language=en-US&page=1`
    );

    const popularrMovies = await response.json();
    return popularrMovies;

};

    export const getGenres = async () => {
        const response = await fetch(
            `${url}/genre/movie/list?api_key=${key}&language=en-US`
        );
    
        const genres = await response.json();
        return genres;
    };
    
    export const getMovie = async (id) => {
        const response = await fetch(
            `${url}/movie/${id}?api_key=${key}&language=en-US`
        );
    
        const movie = await response.json();
        return movie;
    };
    
    export const getMovieCredits = async (id) => {
        const response = await fetch(
            `${url}/movie/${id}/credits?api_key=${key}&language=en-US`
        );
    
        const credits = await response.json();
        return credits;
}
