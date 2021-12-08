import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background_primary: string;
      background_secondary: string;
      subtitle: string;
      text: string;
      text_detail: string;
      shape: string;
      shape_border: string;
      purple: string;
      placeholder: string;
    };

    fonts: {
      title: string;
      section_title: string;
      subtitle: string;
      call_to_action: string;
      button: string;
      project_subtitle: string;
      paragraph: string;
      nav: string;
      placeholder: string;
    };
  }
}
