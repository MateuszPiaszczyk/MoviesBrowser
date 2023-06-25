import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0 10px;

  ${({ details }) =>
    details &&
    css`
      margin: 0;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.fullPage}px) {
    margin: 8px 0;
  }
`;

export const Genre = styled.p`
  background-color: ${({ theme }) => theme.colors.mystic};
  border-radius: 5px;
  margin: 0;
  font-size: 14px;
  padding: 8px 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.fullPage}px) {
    ${({ details }) =>
      !details &&
      css`
        font-size: 10px;
        padding: 4px 8px;
        align-self: flex-start;
      `}
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      ${({ details }) =>
        details &&
        css`
          font-size: 10px;
          padding: 4px 8px;
          align-self: flex-start;
        `}
    }
  }
`;
