import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../../assets/search.svg";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  outline-offset: 10px;
  cursor: pointer;
  
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 60px;
  border-radius: 33px 0 0 33px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.waterloo};

`;

export const StyledSearchIcon = styled(SearchIcon)`
  width: 21px;
`;

export const SearchInput = styled.input`
  height: 48px;
  border: none;
  width: 392px;
  border-radius: 0 33px 33px 0;
 

  &::placeholder {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    height: 48px;
    width: 100%;
  
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileVertical}px) {
    height: 48px;
    width: 100%;
  
  }
`;
