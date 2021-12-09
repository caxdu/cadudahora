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

  textarea {
    margin-top: 0.625rem;
    width: 32.9375rem;
    height: 10.125rem;
    border: 1px solid ${props => props.theme.colors.subtitle};
    border-radius: 10px;
    background: ${props => props.theme.colors.background_primary};
    resize: none;
    padding: 1rem 1.25rem;
    ${props => props.theme.fonts.placeholder};
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
