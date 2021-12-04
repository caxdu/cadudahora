import styled from 'styled-components';

interface SlideIndicatorProps {
  isSelected: boolean;
}

export const Container = styled.div``;

export const HomeSection = styled.section`
  height: calc(100vh - 90px);
  padding-left: 9.125rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  main {
    h1 {
      width: 40.875rem;
      ${props => props.theme.colors.text};
      ${props => props.theme.fonts.title};
    }

    footer {
      margin-top: 1.875rem;
      display: flex;
      align-items: center;
      gap: 1.25rem;

      button {
        height: 4rem;
        width: 15.6875rem;
        border-radius: 0.625rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        ${props => props.theme.fonts.button};

        &:nth-child(1) {
          border: 0;
          background: ${props => props.theme.colors.purple};
          color: ${props => props.theme.colors.background_primary};
          transition: filter 0.2s;

          &:hover {
            filter: brightness(0.8);
          }
        }

        &:nth-child(2) {
          border: 1px solid ${props => props.theme.colors.purple};
          background: transparent;
          color: ${props => props.theme.colors.purple};
          transition: all 0.2s;

          &:hover {
            background: ${props => props.theme.colors.purple};
            color: ${props => props.theme.colors.background_primary};
          }
        }
      }
    }
  }

  aside {
    display: flex;
    height: 90%;
    margin-bottom: auto;
    position: relative;

    img {
      position: absolute;
      left: -70px;
      height: 95%;
      top: 2%;
    }

    div.carousel-root {
      height: 100%;
    }

    div.carousel-slider {
      height: 100%;
    }

    div.slider-wrapper {
      width: 58.375rem;
      height: 100%;

      ul {
        height: 100%;
      }
    }

    div.carousel-item {
      height: 100%;
      background: gray;
    }
  }
`;

export const SliderIndicator = styled.button<SlideIndicatorProps>`
  aspect-ratio: 1/1;
  height: 1.3125rem;
  border-radius: 50%;
  border: 0;
  margin-left: 10px;
  margin-right: 10px;
  background: ${props => props.isSelected && props.theme.colors.purple};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
`;

export const WhoAmISection = styled.section`
  height: 100vh;
  background: ${props => props.theme.colors.background_secondary};
  display: flex;
  align-items: center;
  padding-left: 9.125rem;
  gap: 5.375rem;

  aside {
    width: 32.9375rem;
    height: 39.1875rem;
    position: relative;

    img {
      position: absolute;
      left: -70px;
      bottom: 0;
    }

    div {
      height: 100%;
      width: 100%;
      background: gray;
    }
  }

  main {
    h1 {
      ${props => props.theme.fonts.title};
      color: ${props => props.theme.colors.purple};
    }

    h2 {
      ${props => props.theme.fonts.subtitle};
      color: ${props => props.theme.colors.subtitle};
    }

    p {
      margin-top: 3.125rem;
      ${props => props.theme.fonts.paragraph};
      color: ${props => props.theme.colors.text};
      width: 62.625rem;
    }

    footer {
      margin-top: 3.125rem;
      display: flex;
      align-items: center;
      gap: 1.25rem;

      a {
        aspect-ratio: 1/1;
        height: 3.625rem;
        border-radius: 50%;
        background: ${props => props.theme.colors.subtitle};
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          color: ${props => props.theme.colors.shape};
        }
      }
    }
  }
`;
