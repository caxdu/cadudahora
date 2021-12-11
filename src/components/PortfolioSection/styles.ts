import styled from 'styled-components';

interface PortfolioItemProps {
  image: string;
}

export const Container = styled.section`
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
    position: relative;

    img {
      position: absolute;
      top: -25px;
    }

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
`;

export const PortfolioItem = styled.button<PortfolioItemProps>`
  border: 6px solid ${props => props.theme.colors.background_primary};
  transition: border 0.4s;

  &:hover {
    border: 6px solid ${props => props.theme.colors.purple};
  }

  div {
    aspect-ratio: 1/1;
    height: 31.8125rem;
    background: ${props => `url('${props.image}') no-repeat`};
    background-size: cover;
  }
`;
