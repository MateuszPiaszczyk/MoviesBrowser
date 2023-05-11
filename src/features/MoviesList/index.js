import { Container } from "../../common/Container/styled";
import { List, MainHeader } from "./styled";
import { MovieTile } from "../../common/MovieTile";

export const MovieList = () => {
    return (
        <Container>
            <MainHeader>Popular Movies</MainHeader>
            <List>
                <MovieTile />
            </List>
        </Container>
    )
};