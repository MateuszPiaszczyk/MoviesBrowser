import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../common/Container/styled";
import {
    Content,
    List,
    MainHeader,
    Poster,
    Tag,
    Tags,
    Title,
    Tile,
    Year,
    Star,
    Rating,
    Rate,
    Votes,
} from "./styled";
import poster from "../../common/img/poster.png";
import { useEffect } from "react";
import {
    fetchPopularMovies,
    selectPopularMoviesList,
    selectPopularMoviesStatus,
} from "./popularMoviesSlice";

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
                <MainHeader>Popular Movies</MainHeader>
                <List>
                    {fetchResult.results.map((movie) => (
                        <Tile key={movie.id}>
                            <Poster src={poster} alt="movie poster" />
                            <Content>
                                <Title>{movie.title}</Title>
                                <Year>2020</Year>
                                <Tags>
                                    <Tag>Action</Tag>
                                    <Tag>Adventure</Tag>
                                    <Tag>Drama</Tag>
                                </Tags>
                                <Rating>
                                    <Star />
                                    <Rate>7,8</Rate>
                                    <Votes>35 votes</Votes>
                                </Rating>
                            </Content>
                        </Tile>
                    ))}
                </List>
            </Container>
        )
    }
};