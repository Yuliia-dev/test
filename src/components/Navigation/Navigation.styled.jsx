import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  &.active {
    color: #cd0067;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;
