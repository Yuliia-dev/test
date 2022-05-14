import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import { HomePage, GalleryPage, CartPage } from '../../pages/index';

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
