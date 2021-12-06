import Link from 'next/link';
import { AiFillInstagram } from 'react-icons/ai';
import { FaBehance, FaLinkedinIn } from 'react-icons/fa';
import { Container } from './styles';

export function WhoAmISection() {
  return (
    <Container id="whoami">
      <aside>
        <div />

        <img src="arrows.svg" alt="arrows" />
      </aside>

      <main>
        <h1>&lt; Quem sou eu?</h1>
        <h2>UM POUCO DE QUEM FAZ ISSO ACONTECER</h2>

        <p>
          Graduado em 7 temporadas de Teen Wolf e 80 séries alheias, eu sou
          Carlos Eduardo (ou Cadu para os íntimos). Estudo Design Gráfico desde
          os 8 anos de modo autodidata e sou formado no curso de Programação de
          Jogos Digitais pelo NAVE Recife, que foi meu ponto de partida
          profissionalmente. Sou extremamente apaixonado por tudo que envolva
          comunicação visual desde cinema até a televisão.
          <br />
          <br />
          Além de Design Gráfico no geral, também sou apaixonado e estudo UI
          Design, Social Mídia, Branding Design, Audiovisual e Fotografia. Fora
          o Design, também mentor em Spark AR pelo Facebook.
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
    </Container>
  );
}
