import styled, { css } from 'styled-components';
import { Form } from '@unform/web';

interface PersonalityButtonProps {
  active: boolean;
}

export const Content = styled(Form)`
  margin-top: 10.625rem;
  padding: 0 22.1875rem;
  padding-bottom: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: ${props => props.theme.colors.purple};
    ${props => props.theme.fonts.title}
  }

  h2 {
    color: ${props => props.theme.colors.subtitle};
    ${props => props.theme.fonts.subtitle}
  }

  fieldset {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 9.75rem;
    row-gap: 3.75rem;
    border: 0;

    legend {
      text-align: center;
      ${props => props.theme.fonts.project_subtitle};
      color: ${props => props.theme.colors.text};
      margin-bottom: 3.8125rem;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: calc(50% - 9px);
        height: 6px;
        width: 18px;
        border-radius: 24px;
        background: ${props => props.theme.colors.purple};
      }
    }

    section {
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
    }
  }

  > button {
    margin-top: 3.375rem;
    width: 20.625rem;
    height: 4rem;
    border-radius: 10px;
    border: 0;
    ${props => props.theme.fonts.button}
    background: ${props => props.theme.colors.purple};
    color: #fff;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
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
