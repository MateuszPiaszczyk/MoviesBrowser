import { Wrapper, NoResultIcon } from "./styled";
import { Container } from "../Container";

export const NoResult = ({ query }) => (
  <Container>
    <Message title={`Sorry,there are no results for this "${query}"`} />
    <Wrapper>
      <NoResultIcon />
    </Wrapper>
  </Container>
);
