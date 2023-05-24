import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 16px;
`;

export const SearchInfo = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 36px;
  line-height: 43px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 12px;
  }
`;

export const OutputResultList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 16px;
  }
`;