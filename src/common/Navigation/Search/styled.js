import styled from "styled-components";
import {ReactComponent as SearchIcon} from "../../../assets/search.svg";

export const Wrapper = styled.div`
display: flex;
  align-items: center;
`;
export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  height: 45px;
  width: 432px;
  border-radius: 33px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    height: 45px;
    width: 100%;
    margin: 0 15px;
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  width: 16px;
`;

export const SearchInput = styled.input`
  height: 44px;
  width: 100%;
  padding: 19px;
  border: 1px solid ${({ theme }) => theme.colors.mystic};
  border-radius: 33px;
  outline-offset: 10px;
  cursor: pointer;

  &::placeholder {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    height: 44px;
    width: 100%;
    padding: 10px;
  }
`;
