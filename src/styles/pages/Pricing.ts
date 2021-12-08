import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div``;

export const Content = styled(Form)`
  margin-top: 10.625rem;
  padding: 0 22.1875rem;

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
  }
`;
