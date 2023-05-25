import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 24px;
  padding: 0;
  margin: 0 0 24px 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }
`;

export const ListItem = styled.li`
`;