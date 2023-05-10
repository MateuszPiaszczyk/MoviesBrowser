import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "link-active";

export const StyledNavigationLink = styled.a`
font-size: 14px;
padding: 12.5px 24px;
color: ${({ theme }) => theme.colors.white};
text-decoration: none;
text-transform: uppercase;

&:active {
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 24px;
}
`;

export const StyledNavigation = styled.nav`
  background: ${({ theme }) => theme.colors.woodsmoke};
  margin: 0;
  width: 100%;
  padding: 22px 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    padding: 16px 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const TitleLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Title = styled.h1`
  font-weight: 300;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    font-size: 13px;
  }
`;

export const Icon = styled.img`
  height: 40px;
  weight: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    height: 20px;
    weight: 20px;
  }
`;

export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  gap:15px
  margin:0;
`;

export const NavigationItem = styled.li`
  flex-grow: 0;
`;
