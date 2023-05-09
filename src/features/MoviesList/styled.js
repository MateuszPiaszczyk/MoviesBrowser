import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../common/img/star.svg";

export const MainHeader = styled.h1`
    font-size: 36px;
    font-weight: 600;
    margin-top: 56px;
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;
    padding: 0;
    margin: 0;
`;

export const Tile = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    max-width: 324px;
    padding: 16px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    margin-bottom: 24px;
`;

export const Poster = styled.img`
    width: 292px;
    height: 434px;
`;

export const Content = styled.div``;

export const Title = styled.h2`
    font-weight: 500;
    font-size: 22px;
    line-height: 29px;
    margin: 16px 0;
`;

export const Year = styled.div`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.waterloo};
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
`;

export const Rating = styled.section`
    display: flex;
    align-items: center;
    margin-top: 40px;
`;

export const Star = styled(StarIcon)`
    width: 24px;
`;

export const Rate = styled.div`
    font-weight: 600;
    font-size: 16px;
    padding: 0 12px;
`;

export const Votes = styled.div`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.waterloo};
`;


