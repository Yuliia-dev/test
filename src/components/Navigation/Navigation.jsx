import { Outlet } from 'react-router-dom';
import { Nav, Link } from './Navigation.styled';

export default function Navigation() {
  return (
    <>
      <Nav>
        <Link to="/">CoolDreamShop</Link>
        <Link to="gallery">GallerYouRest</Link>
        <Link to="cart">CarToYou</Link>
      </Nav>
      <Outlet />
    </>
  );
}
