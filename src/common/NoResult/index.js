import { Wrapper, NoResultIcon } from "./styled";
import { Container } from "../Container";

export const NoResult = () => (
  <Container>
    <Message title={"Sorry,there are no results for this movie"} />
    <Wrapper>
      <NoResultIcon />
    </Wrapper>
  </Container>
);
