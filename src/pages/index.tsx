import { Header } from '../components/Header';
import { SliderSection } from '../components/SliderSection';
import { WhoAmISection } from '../components/WhoAmISection';
import { PortfolioSection } from '../components/PortfolioSection';

import { Container } from '../styles/pages/Home';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ContactSection } from '../components/ContactSection';

export default function Home() {
  return (
    <Container>
      <Header />

      <SliderSection />

      <WhoAmISection />

      <PortfolioSection />

      <ContactSection />

      <footer>
        <p>Carlos Eduardo da Hora Copyright @ 2021</p>
      </footer>
    </Container>
  );
}
