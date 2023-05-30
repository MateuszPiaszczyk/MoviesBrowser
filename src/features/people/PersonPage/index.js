import { MainPersonTile } from "./MainPersonTile";
import { MainHeader } from "../../../common/MainHeader";
import { Container } from "../../../common/Container/styled";

export const PersonPage = () => {
    return (
        <Container>
            <MainPersonTile />
            <MainHeader title="Movies - cast (4)" />
            <MainHeader title="Movies - crew (4)" />
        </Container>
    )
};