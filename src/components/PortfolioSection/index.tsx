import { Container, PortfolioGrid } from './styles';

export function PortfolioSection() {
  return (
    <Container id="portfolio">
      <h1>&lt; Portfólio</h1>
      <h2>É COMO UM ÁLBUM DE FAMÍLIA</h2>

      <PortfolioGrid>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </PortfolioGrid>

      <footer>
        <p>
          Você também pode <br /> conferir outros projetos:
        </p>
        <button type="button">CONFERIR PROJETOS</button>
      </footer>
    </Container>
  );
}
