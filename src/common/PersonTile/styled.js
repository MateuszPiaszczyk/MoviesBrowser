import styled from "styled-components";
import { ReactComponent as noPhoto } from "../img/no-photo.svg";

export const Tile = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 12px ${({ theme }) => theme.colors.lightHeather};
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
    border-radius: 5px;
    padding: 16px;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    box-shadow: 0px 4px 12px ${({ theme }) => theme.colors.lightHeather};

  &:hover {
    transform: scale(105%);
    box-shadow: 0px 4px 12px ${({ theme }) => theme.colors.waterloo};
  }
  
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        grid-template-columns: auto 1fr; 
        width: 330px;
    }
`;

export const PhotoWrapper = styled.div`
    height: auto;
    border-radius: 5px;
    aspect-ratio: 2 / 3;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 5px;
    flex-basis: auto; 
    background-image: url(${noPhoto});
    background-size: 100%;
    background-color: ${({ theme }) => theme.colors.silver};
    color: ${({ theme }) => theme.colors.white};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        height: fit-content;
    }
`;

export const Photo = styled.img`
    width: 100%;
    height: auto;
    border-radius: 5px;
    aspect-ratio: 2/3;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: grid;
        grid-template-columns: auto 1fr;
        height: fit-content;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        width: 120px;
    }
`;

export const Name = styled.div`
    font-weight: 500;
    font-size: 22px;
    text-align: center;
    margin-top: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    font-size: 14px;
  }
`;
