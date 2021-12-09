import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6.5rem;
  background: ${props => props.theme.colors.purple};
  color: ${props => props.theme.colors.background_primary};
  ${props => props.theme.fonts.button};
  font-weight: bold;
`;
