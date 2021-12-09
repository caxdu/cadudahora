import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  p {
    color: ${props => props.theme.colors.text};
    ${props => props.theme.fonts.button}

    span {
      color: ${props => props.theme.colors.purple};
    }
  }

  label {
    margin-top: 10px;
    width: 32.8125rem;
    height: 4rem;
    border: 1px solid ${props => props.theme.colors.subtitle};
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding-left: 1.125rem;
    color: ${props => props.theme.colors.subtitle};
    ${props => props.theme.fonts.placeholder}

    &.selected {
      border-color: ${props => props.theme.colors.purple};
      color: ${props => props.theme.colors.purple};
    }

    input[type='radio'] {
      appearance: none;
      color: currentColor;
      margin-right: 0.75rem;
      width: 2rem;
      height: 2rem;
      border: 1px solid ${props => props.theme.colors.subtitle};
      border-radius: 50%;
      display: grid;
      place-content: center;

      &:checked {
        border-color: ${props => props.theme.colors.purple};
      }

      &:checked::after {
        content: '';
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background-color: ${props => props.theme.colors.purple};
      }
    }
  }
`;
