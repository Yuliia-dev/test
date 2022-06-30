import CartView from 'components/CartView/CartView';
import { Footer } from 'components/Footer/Footer';
import { Container } from './styled';

export function CartPage() {
  return (
    <>
      <Container>
        <CartView />;
      </Container>
      <Footer />
    </>
  );
}
