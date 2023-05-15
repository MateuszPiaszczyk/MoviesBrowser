import styled from "styled-components";

export const Tile = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    max-width: 208px;
    height: 380px;
    padding: 16px;
`;

export const Photo = styled.img`
    max-width: 177px;
    border-radius: 5%;
    margin-bottom: 16px;
`;

export const Name = styled.div`
    font-weight: 500;
    font-size: 22px;
    text-align: center;
`;