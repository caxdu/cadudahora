import styled from 'styled-components';

interface ImageBackgroundAsProp {
  image: string;
}

export const Cover = styled.div<ImageBackgroundAsProp>`
  width: 100%;
  height: 100vh;
  background: ${props => `url(${props.image})`};
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 9.375rem;
  padding: 9.375rem 0;
  padding-left: 9.5rem;

  main {
    width: 58.8125rem;

    h1 {
      span {
        color: ${props => props.theme.colors.purple};
      }

      ${props => props.theme.fonts.title};
      color: ${props => props.theme.colors.text};
    }

    div {
      margin-top: 1.5625rem;
      color: ${props => props.theme.colors.text};
      ${props => props.theme.fonts.paragraph};
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2.1875rem;

    div {
      ${props => props.theme.fonts.paragraph};
      color: ${props => props.theme.colors.text};
    }
  }
`;

export const Image = styled.div<ImageBackgroundAsProp>`
  height: 100vh;
  background: ${props => `url(${props.image})`};
  background-size: cover;
`;
