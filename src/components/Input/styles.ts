import styled, { css } from 'styled-components';

interface ContainerProps {
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  p {
    color: ${props => props.theme.colors.text};
    ${props => props.theme.fonts.button}

    span {
      color: ${props => props.theme.colors.purple};
    }
  }

  > span {
    color: ${props => props.theme.colors.subtitle};
    ${props => props.theme.fonts.placeholder};
  }

  input {
    margin-top: 0.625rem;
    width: 33rem;
    height: 4.0625rem;
    border-radius: 0.625rem;
    border: 1px solid ${props => props.theme.colors.subtitle};
    padding: 0 1rem;
    ${props => props.theme.fonts.placeholder};
    background: ${props => props.theme.colors.background_primary};
    color: ${props => props.theme.colors.text};

    &::placeholder {
      color: ${props => props.theme.colors.placeholder};
    }

    ${props =>
      props.isFilled &&
      css`
        border-color: ${props.theme.colors.purple};
      `}

    &:focus {
      outline: 0;
      border-color: ${props => props.theme.colors.purple};
    }
  }
`;
