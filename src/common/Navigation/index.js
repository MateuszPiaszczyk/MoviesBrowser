import {
  Icon,
  NavigationItem,
  NavigationList,
  StyledNavigation,
  StyledNavigationLink,
  Title,
  TitleLink,
  Wrapper,
} from "./styled";
import camera from "../../assets/camera.svg";
import { toMovies, toPeople } from "../../core/App/routes";
import { Search } from "./Search";

export const Navigation = () => {
  return (
    <StyledNavigation>
      <Wrapper>
        <TitleLink to="/movies">
          <Icon src={camera} />
          <Title>Movies Browser</Title>
        </TitleLink>
        <NavigationList>
          <NavigationItem>
            <StyledNavigationLink activeClassName="" to={toMovies()}>Movies</StyledNavigationLink>
          </NavigationItem>
          <NavigationItem>
            <StyledNavigationLink to={toPeople()}>People</StyledNavigationLink>
          </NavigationItem>
        </NavigationList>
        <Search />
      </Wrapper>
    </StyledNavigation>
  );
};
