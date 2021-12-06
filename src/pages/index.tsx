import { Header } from '../components/Header';
import { SliderSection } from '../components/SliderSection';
import { WhoAmISection } from '../components/WhoAmISection';

import {
  Container,
  PortfolioGrid,
  PortfolioSection,
} from '../styles/pages/Home';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
  return (
    <Container>
      <Header />

      <SliderSection />

      <WhoAmISection />

      <PortfolioSection id="portfolio">
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
      </PortfolioSection>
    </Container>
  );
}
