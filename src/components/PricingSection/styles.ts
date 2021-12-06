import styled from 'styled-components';

export const Container = styled.section`
  height: 23rem;
  background: ${props => props.theme.colors.background_secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${props => props.theme.colors.text};
    ${props => props.theme.fonts.title};

    strong {
      color: ${props => props.theme.colors.purple};
    }
  }

  button {
    margin-top: 1rem;
    height: 4rem;
    width: 17.375rem;
    background: ${props => props.theme.colors.purple};
    border: 0;
    border-radius: 0.625rem;

    display: flex;
    align-items: center;
    justify-content: center;

    ${props => props.theme.fonts.button};
    color: ${props => props.theme.colors.background_primary};

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
