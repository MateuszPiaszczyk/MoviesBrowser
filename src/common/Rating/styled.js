import styled, {css} from "styled-components";
import { ReactComponent as star} from "../../common/img/star.svg";

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
  line-height: 1.5;
  font-size: 16px;
  height: 100%;
  align-content: flex-end;
  `;

export const Vote = styled.span`
color: ${({ theme }) => theme.colors.woodsmoke};
font-weight: bold;
`;

export const Votes = styled.span`
  color: ${({ theme }) => theme.color.waterloo};
`;

export const Star = styled(star)`
  height: 24px;
  width: auto;
  
  ${({ backdrop}) =>
  backdrop && css`
  height: 40px;
  `}
`;

export const BackdropRatingWrapper = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: inline-grid;
  grid-template-columns: auto auto auto auto;
  font-size: 16px;
  line-height: 1.2;
  grid-gap: 16px 8px;
  align-items: center;
  `;

export const DetailsRatingWrapper = styled.div`
display: inline-flex;
font-size: 14px;
line-height: 1.2;
gap: 8px;
align-items: center;
margin: 24px 0;
`;

export const Average = styled.span`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  `;

export const Total = styled.span`
@media (max-width: ${({ theme }) => theme.breakpoint.small}) {
  ${({ backdrop }) =>
    !backdrop &&
    css`
      display: none;
    `}
}
`;

export const Count = styled.span`
margin-right: 4px;
${({ backdrop }) =>
  backdrop &&
  css`
    grid-area: 2 / 1 / 3 / 4;
  `}
  `;
