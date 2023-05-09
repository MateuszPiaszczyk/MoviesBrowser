import { Container } from "../../common/Container/styled";
import { Content, List, MainHeader, Poster, Tag, Tags, Title, Tile, Year } from "./styled";
import poster from "../../common/img/poster.png";

export const MovieList = () => {
    return (
        <Container>
            <MainHeader>Popular Movies</MainHeader>
            <List>
                <Tile>
                    <Poster src={poster} alt="movie poster" />
                    <Content>
                        <Title>Mulan</Title>
                        <Year>2020</Year>
                        <Tags>
                            <Tag>Action</Tag>
                            <Tag>Adventure</Tag>
                            <Tag>Drama</Tag>
                        </Tags>
                    </Content>
                </Tile>
            </List>
        </Container>
    )
};