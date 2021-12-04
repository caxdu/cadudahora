import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  title: 'dark',

  colors: {
    background_primary: '#FFF',
    background_secondary: '#FAFAFA',
    subtitle: '#575757',
    text: '#1A1A1A',
    text_detail: '#8C8C8C',
    shape: '#E7E7E7',
    shape_border: '#BCBCBC',
    purple: '#AA00FE',
  },

  fonts: {
    title: `
      font-family: Poppins;
      font-weight: bold;
      font-size: 3.375rem;
    `,
    section_title: `
      font-family: Poppins;
      font-weight: bold;
      font-size: 3.375rem;
      line-height: 122.5%;
    `,
    subtitle: `
      font-family: Inter;
      font-size: 1.5625rem;
      line-height: 140%;
    `,
    project_subtitle: `
      font-family: Poppins;
      font-weight: bold;
      font-size: 1.75rem;
      line-height: 108.5%%;
    `,
    call_to_action: `
      font-family: Poppins;
      font-weight: 500;
      font-size: 1.75rem;
    `,
    button: `
      font-family: Inter;
      font-weight: 500;
      font-size: 1.5rem;
    `,
    paragraph: `
      font-family: Inter;
      font-size: 1.5625rem;
      line-height: 140%;
    `,
    nav: `
      font-family: Inter;
      font-weight: bold;
      font-size: 1.5rem;
    `,
  },
};

export default lightTheme;
