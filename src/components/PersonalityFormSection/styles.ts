import styled, { css } from 'styled-components';

interface PersonalityButtonProps {
  active: boolean;
}

export const Container = styled.section`
  grid-column: 1 / 3;
  display: flex;
  flex-direction: column;

  p {
    color: ${props => props.theme.colors.text};
    ${props => props.theme.fonts.button}

    span {
      color: ${props => props.theme.colors.purple};
    }
  }

  div {
    margin-top: 1.5625rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const PersonalityButton = styled.button<PersonalityButtonProps>`
  padding: 1.25rem 1.875rem;
  border-radius: 0.625rem;
  background: ${props => props.theme.colors.background_primary};
  border: 1px solid ${props => props.theme.colors.purple};
  color: ${props => props.theme.colors.purple};
  ${props => props.theme.fonts.button};

  ${props =>
    props.active &&
    css`
      background: ${props.theme.colors.purple};
      color: ${props.theme.colors.background_primary};
    `};

  &:hover {
    background: ${props => props.theme.colors.purple};
    color: ${props => props.theme.colors.background_primary};
  }
`;
