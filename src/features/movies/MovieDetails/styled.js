import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
  margin: 0;
  padding: 0;
  list-style-type: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(162px, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  `;

export const Item = styled.li`
transition: transform 0.15s ease-out;
&:hover {
    transform: translateY(-6px);
  }
`;

export const SingleMovieContainer = styled.main`
`