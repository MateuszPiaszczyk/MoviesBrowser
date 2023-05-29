import { Container } from "../Container/styled";
import { Wrapper, NoResultIcon, Message } from "./styled";


export const NoResult = () => (
  <Container>
    <Message title={"Sorry,there are no results for this movie"} />
    <Wrapper>
      <NoResultIcon />
    </Wrapper>
  </Container>
);
