import { Outlet } from 'react-router-dom';
import { Nav, Link } from './Navigation.styled';

export default function Navigation() {
  return (
    <>
      <Nav>
        <Link to="/">CoolDreamShop</Link>
        <Link to="gallery">Gallery</Link>
        <Link to="cart">Cart</Link>
      </Nav>
      <Outlet />
    </>
  );
}
