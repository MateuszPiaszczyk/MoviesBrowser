import { Wrapper, NoResultIcon} from "./styled";
import { Container } from "../Container/styled";
import { MainHeader } from "../MainHeader";

export const NoResult = () => (
  <Container>
    <MainHeader tite="Sorry,there are no results for this movie." />
    <Wrapper>
      <NoResultIcon />
    </Wrapper>
  </Container>
);
