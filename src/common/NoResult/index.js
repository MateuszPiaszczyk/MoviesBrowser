import { Wrapper, NoResultIcon, Message } from "./styled";
import { Container } from "../Container/styled";

export const NoResult = () => (
  <Container>
    <Message title={"Sorry,there are no results for this movie"} />
    <Wrapper>
      <NoResultIcon />
    </Wrapper>
  </Container>
);
