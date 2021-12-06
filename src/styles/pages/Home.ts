import styled from 'styled-components';

export const Container = styled.div``;

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

export const PortfolioSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 8rem 9.125rem 10.5rem 9.125rem;

  h1 {
    color: ${props => props.theme.colors.purple};
    ${props => props.theme.fonts.title};
  }

  h2 {
    color: ${props => props.theme.colors.subtitle};
    ${props => props.theme.fonts.subtitle};
  }

  footer {
    margin-top: 12.375rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      text-align: center;
      color: ${props => props.theme.colors.text};
      ${props => props.theme.fonts.call_to_action};
    }

    button {
      margin-top: 15px;
      width: 20.625rem;
      height: 4rem;
      border-radius: 10px;
      background: ${props => props.theme.colors.purple};
      border: 0;
      display: flex;
      align-items: center;
      transition: all 0.2s;
      justify-content: center;
      color: #fff;
      ${props => props.theme.fonts.button};

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;

export const PortfolioGrid = styled.main`
  margin-top: 8.375rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.125rem;

  div {
    aspect-ratio: 1/1;
    height: 31.8125rem;
    background: grey;
  }
`;
