import styled from 'styled-components';

export const Container = styled.section`
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
      left: -60px;
      bottom: 0;
      height: 100%;
    }

    div {
      height: 100%;
      width: 100%;
      background: url('cadu.jpg') no-repeat;
      background-size: cover;
      background-position: center;
    }

    @media (max-width: 1675px) {
      width: 28.125rem;
    }

    @media (max-width: 1580px) {
      display: none;
    }
  }

  main {
    h1 {
      ${props => props.theme.fonts.title};
      color: ${props => props.theme.colors.purple};

      @media (max-width: 1580px) {
        text-align: center;
      }

      @media (max-width: 550px) {
        font-size: 2.8125rem;
      }
    }

    h2 {
      ${props => props.theme.fonts.subtitle};
      color: ${props => props.theme.colors.subtitle};

      @media (max-width: 1580px) {
        text-align: center;
      }

      @media (max-width: 550px) {
        font-size: 1.25rem;
      }
    }

    p {
      margin-top: 3.125rem;
      ${props => props.theme.fonts.paragraph};
      color: ${props => props.theme.colors.text};
      width: 62.625rem;

      @media (max-width: 1810px) {
        width: 56.25rem;
      }

      @media (max-width: 1690px) {
        font-size: 1.25rem;
        width: 50rem;
      }

      @media (max-width: 1580px) {
        width: 100%;
        padding: 0 5%;
        font-size: 1.5625rem;
      }
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
        transition: background 0.2s;

        &:hover {
          background: ${props => props.theme.colors.purple};
        }

        svg {
          color: ${props => props.theme.colors.shape};
        }
      }
    }

    @media (max-width: 1580px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 1580px) {
    padding: 0;
    justify-content: center;
  }
`;
