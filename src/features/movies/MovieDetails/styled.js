import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
  margin: 0;
  padding: 0;
  `;

export const Item = styled.li`
transition: transform 0.15s ease-out;
`;

export const SingleMovieContainer = styled.main`
`