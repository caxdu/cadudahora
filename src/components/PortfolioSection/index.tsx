import { Container, PortfolioGrid, PortfolioItem } from './styles';

type Project = {
  id: string;
  url: string;
};

interface PortfolioSectionProps {
  projects: Project[];
}

export function PortfolioSection({ projects }: PortfolioSectionProps) {
  return (
    <Container id="portfolio">
      <h1>&lt; Portfólio</h1>
      <h2>É COMO UM ÁLBUM DE FAMÍLIA</h2>

      <PortfolioGrid>
        {projects.map(project => (
          <PortfolioItem key={project.id} image={project.url} />
        ))}
      </PortfolioGrid>

      <footer>
        <img src="plus.svg" alt="plus" />
        <p>
          Você também pode <br /> conferir outros projetos:
        </p>
        <button type="button">CONFERIR PROJETOS</button>
      </footer>
    </Container>
  );
}
