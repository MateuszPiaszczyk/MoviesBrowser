import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "link-active";

export const StyledNavigationLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  font-size: 14px;
  font-weight: 600;
  padding: 12.5px 24px;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  text-transform: uppercase;

  &.${activeClassName} {
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
    padding: 16px 10px;
  }
`;

export const NavigationGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileVertical}px) {
    width: 100%;
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const TitleLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    font-size: 13px;
  }
`;

export const Icon = styled.img`
  height: 40px;
  width: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    height: 20px;
    width: 20px;
  }
`;

export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 0;
`;

export const NavigationItem = styled.li`
  flex-grow: 0;
`;
