import { Link } from 'react-router-dom';
import { Title, Container } from './HomeView.styled';

export function HomeView() {
  return (
    <Container>
      <Title>
        In this application you can find something interesting and unexpected,
        maybe it was your dream, who knows 😉{' '}
      </Title>
      <Link to="gallery">
        <button type="button"> Get start </button>
      </Link>
    </Container>
  );
}
