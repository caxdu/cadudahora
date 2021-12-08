import { DefaultTheme } from 'styled-components';

const darkTheme: DefaultTheme = {
  title: 'dark',

  colors: {
    background_primary: '#131219',
    background_secondary: '#212121',
    subtitle: '#FFFFFF',
    text: '#FFFFFF',
    text_detail: '#D7D7D7',
    shape: '#575757',
    shape_border: '#575757',
    purple: '#AA00FE',
    placeholder: '#D7D7D7',
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
      font-weight: normal;
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
    placeholder: `
      font-family: Poppins;
      font-weight: 500;
      font-size: 0.9375rem;
      line-height: 24px;
      letter-spacing: 0.75px;
    `,
  },
};

export default darkTheme;
