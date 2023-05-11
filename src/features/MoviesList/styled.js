import styled from "styled-components";

export const MainHeader = styled.h1`
    font-size: 36px;
    font-weight: 600;
    margin-top: 56px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
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
    margin: 0 0 24px 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        grid-template-columns: 1fr;
        justify-items: center;
        grid-gap: 16px;
    }
`;

