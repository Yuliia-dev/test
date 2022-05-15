import { Link } from 'react-router-dom';
import { Title, Container, ContainerBox, Button } from './HomeView.styled';

export function HomeView() {
  return (
    <Container>
      <ContainerBox>
        <Title>
          In this application you can find something interesting and unexpected,
          maybe it was your dream, who knows 😉
        </Title>
        <Link to="gallery">
          <Button type="button"> Get start </Button>
        </Link>
      </ContainerBox>
    </Container>
  );
}
