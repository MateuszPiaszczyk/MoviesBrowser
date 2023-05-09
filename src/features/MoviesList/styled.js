import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../common/img/star.svg";

export const MainHeader = styled.h1`
    font-size: 36px;
    font-weight: 600;
    margin-top: 56px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 18px;
        margin-top: 24px;
        padding-left: 24px;
    }
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;
    padding: 0;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        justify-items: center;
        grid-gap: 16px;
    }
`;

export const Tile = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    max-width: 324px;
    padding: 16px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    margin-bottom: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-width: 330px;
        display: flex;
        margin-bottom: 0;
    }
`;

export const Poster = styled.img`
    width: 292px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-width: 114px;
        max-height: 169px;
    }
`;

export const Content = styled.div`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-left: 24px;
    }
`;

export const Title = styled.h2`
    font-weight: 500;
    font-size: 22px;
    line-height: 29px;
    margin: 16px 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 16px;
        margin: 0;
    }
`;

export const Year = styled.div`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.waterloo};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
    }
`;

export const Tags = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding-left: 0;
    margin-top: 8px;
`;

export const Tag = styled.li`
    background-color: ${({ theme }) => theme.colors.mystic};
    padding: 8px 16px;
    font-size: 14px;
    margin-right: 8px;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 10px;
        padding: 4px 8px;
        margin-bottom: 12px;
    }
`;

export const Rating = styled.section`
    display: flex;
    align-items: center;
    margin-top: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-top: 0;
    }
`;

export const Star = styled(StarIcon)`
    width: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 16px;
    }
`;

export const Rate = styled.div`
    font-weight: 600;
    font-size: 16px;
    padding: 0 12px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
        padding: 0 7px;
    }
`;

export const Votes = styled.div`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.waterloo};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
    }
`;


