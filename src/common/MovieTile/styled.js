import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../common/img/star.svg";

export const Tile = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    max-width: 324px;
    height: 682px;
    padding: 16px;
    position: relative;
    box-shadow: 0px 4px 12px ${({ theme }) => theme.colors.lightHeather};
    border-radius: 5px;
    transition: transform 0.4s ease, box-shadow 0.4s ease;

    &:hover {
        transform: scale(105%);
        box-shadow: 0px 4px 12px ${({ theme }) => theme.colors.waterloo};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        max-width: 330px;
        height: 200px;
        display: flex;
        margin-bottom: 0;
    }
`;

export const Poster = styled.img`
    width: 292px;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        max-width: 114px;
        max-height: 169px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        margin-left: 24px;
        justify-content: normal;
    }
`;

export const Title = styled.h2`
    font-weight: 500;
    font-size: 22px;
    line-height: 29px;
    margin: 16px 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        font-size: 16px;
        margin: 0;
        line-height: 16px;
    }
`;

export const Year = styled.div`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.waterloo};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
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

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        font-size: 10px;
        padding: 4px 8px;
        margin-bottom: 12px;
    }
`;

export const Rating = styled.div`
    position: absolute;
    bottom: 16px;
    left: 16px;
    display: flex;
    align-items: center;
    margin-top: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        margin-top: 0;
        position: inherit;
    }
`;

export const Star = styled(StarIcon)`
    width: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        width: 16px;
    }
`;

export const Rate = styled.div`
    font-weight: 600;
    font-size: 16px;
    padding: 0 12px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        font-size: 13px;
        padding: 0 7px;
    }
`;

export const Votes = styled.div`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.waterloo};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        font-size: 13px;
    }
`;