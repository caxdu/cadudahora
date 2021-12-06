import { FiChevronDown } from 'react-icons/fi';
import { Carousel } from 'react-responsive-carousel';
import { Container, SliderIndicator } from './styles';

export function SliderSection() {
  return (
    <Container id="start">
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
            <SliderIndicator onClick={onClickHandler} isSelected={isSelected} />
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
    </Container>
  );
}
