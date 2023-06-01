import styled, {css} from "styled-components";
import { ReactComponent as ArrowRight } from "../img/vectorNext.svg";
import { ReactComponent as ArrowLeft } from "../img/vectorPrevious.svg";


export const Wrapper = styled.div`
  display: inline-flex;
  gap: 8px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 40px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 8px;
    margin: 32px 0 16px;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.pattensBlue};
  color: ${({ theme }) => theme.colors.mine};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    filter: brightness(105%);
    transform: scale(1.01);
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.mystic};
    color: ${({ theme }) => theme.colors.woodsmoke};
    cursor: default;
    &:hover {
      filter: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 4px;
    padding: 8px 12px;
  }
`;

export const ButtonText = styled.span`
  display: block;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const Text = styled.span`
  align-self: center;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 10px;
  }
`;

export const PageText = styled.span`
  align-self: center;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 10px;
  }
`;

export const StyledArrowRight = styled(ArrowRight)`
  color: ${({ theme }) => theme.colors.scienceBlue};
`;

export const StyledArrowLeft = styled(ArrowLeft)`
color: ${({ theme }) => theme.colors.darkerGrey};
`;
