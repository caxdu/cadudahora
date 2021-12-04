import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import { FiChevronDown } from 'react-icons/fi';
import { FaBehance, FaLinkedinIn } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

import { Header } from '../components/Header';

import {
  Container,
  HomeSection,
  PortfolioGrid,
  PortfolioSection,
  SliderIndicator,
  WhoAmISection,
} from '../styles/pages/Home';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
  return (
    <Container>
      <Header />

      <HomeSection id="start">
        <main>
          <h1>Juntos vamos realizar o seu projeto mais DaHora!</h1>

          <footer>
            <button type="button">ORÇAMENTO</button>

            <button type="button">
              {' '}
              <FiChevronDown size={20} />
              VER PROJETOS :)
            </button>
          </footer>
        </main>

        <aside>
          <img src="dahora.svg" alt="DAHORA" />

          <Carousel
            axis="horizontal"
            autoPlay
            swipeable
            emulateTouch
            infiniteLoop
            interval={3000}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            renderIndicator={(onClickHandler, isSelected) => (
              <SliderIndicator
                onClick={onClickHandler}
                isSelected={isSelected}
              />
            )}
          >
            <div className="carousel-item">
              <p>teste 1</p>
            </div>

            <div className="carousel-item">
              <p>teste 2</p>
            </div>

            <div className="carousel-item">
              <p>teste 3</p>
            </div>
          </Carousel>
        </aside>
      </HomeSection>

      <WhoAmISection id="whoami">
        <aside>
          <div />

          <img src="arrows.svg" alt="arrows" />
        </aside>

        <main>
          <h1>&lt; Quem sou eu?</h1>
          <h2>UM POUCO DE QUEM FAZ ISSO ACONTECER</h2>

          <p>
            Graduado em 7 temporadas de Teen Wolf e 80 séries alheias, eu sou
            Carlos Eduardo (ou Cadu para os íntimos). Estudo Design Gráfico
            desde os 8 anos de modo autodidata e sou formado no curso de
            Programação de Jogos Digitais pelo NAVE Recife, que foi meu ponto de
            partida profissionalmente. Sou extremamente apaixonado por tudo que
            envolva comunicação visual desde cinema até a televisão.
            <br />
            <br />
            Além de Design Gráfico no geral, também sou apaixonado e estudo UI
            Design, Social Mídia, Branding Design, Audiovisual e Fotografia.
            Fora o Design, também mentor em Spark AR pelo Facebook.
          </p>

          <footer>
            <Link href="https://www.behance.net/dahora">
              <a>
                <FaBehance size={32} />
              </a>
            </Link>

            <Link href="https://www.instagram.com/caxdu/">
              <a>
                <AiFillInstagram size={32} />
              </a>
            </Link>

            <Link href="https://www.linkedin.com/in/dahora/">
              <a>
                <FaLinkedinIn size={32} />
              </a>
            </Link>
          </footer>
        </main>
      </WhoAmISection>

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
