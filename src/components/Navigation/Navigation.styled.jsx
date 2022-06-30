import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: calc(1em + 25px);
  font-weight: 900;

  --x-offset: -0.0625em;
  --y-offset: 0.0625em;
  --stroke: 0.025em;
  --background-color: ${props => props.theme.colors.white};
  --stroke-color: ${props => props.theme.colors.lightBlue};
  &.active {
    color: ${props => props.theme.colors.red};
  }
`;

export const Nav = styled.nav`
  background: ${props => props.theme.colors.lightRed};
  background: linear-gradient(
    72deg,
    rgba(235, 123, 179, 1) 0%,
    rgba(226, 230, 148, 0.8911939775910365) 78%
  );
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;
