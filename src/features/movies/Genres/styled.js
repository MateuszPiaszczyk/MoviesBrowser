import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Genre = styled.p`
  background-color: ${({ theme }) => theme.colors.mystic};
  border-radius: 5px;
  margin: 0;
`;
