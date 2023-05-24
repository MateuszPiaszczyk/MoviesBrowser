import styled from "styled-components";

export const Tile = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 208px;
  height: 380px;
  padding: 16px;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: scale(105%);
    box-shadow: 0px 4px 12px ${({ theme }) => theme.colors.waterloo};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    width: 165px;
    height: 280px;
    margin: 0;
  }
`;

export const Photo = styled.img`
  max-width: 177px;
  border-radius: 5%;
  margin-bottom: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    max-width: 100%;
    margin-bottom: 8px;
  }
`;

export const Name = styled.div`
  font-weight: 500;
  font-size: 22px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    font-size: 14px;
  }
`;
