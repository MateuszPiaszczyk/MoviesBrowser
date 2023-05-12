import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../../assets/search.svg";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
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
  cursor: pointer;  

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    height: 45px;
    width: 100%;
    margin: 0 15px;
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  width: 21px;
`;

export const SearchInput = styled.input`
  height: 48px;
  padding: 20px;
  width: 392px;
  border: 1px solid ${({ theme }) => theme.colors.mystic};
  border-radius: 0 33px 33px 0;
  outline-offset: 10px;
  cursor: pointer;

  &::placeholder {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    height: 48px;
    width: 100%;
    padding: 10px;
    
  }
`;
