import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { Container, PortfolioGrid, PortfolioItem } from './styles';

type Project = {
  id: string;
  url: string;
  uid: string;
};

interface PortfolioSectionProps {
  projects: Project[];
}

export function PortfolioSection({ projects }: PortfolioSectionProps) {
  const { push } = useRouter();

  const redirectToProject = useCallback(
    uid => {
      push(`/project/${uid}`);
    },
    [push],
  );

  return (
    <Container id="portfolio">
      <h1>&lt; Portfólio</h1>
      <h2>É COMO UM ÁLBUM DE FAMÍLIA</h2>

      <PortfolioGrid>
        {projects.map(project => (
          <PortfolioItem
            type="button"
            onClick={() => redirectToProject(project.uid)}
            key={project.id}
            image={project.url}
          >
            <div />
          </PortfolioItem>
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
