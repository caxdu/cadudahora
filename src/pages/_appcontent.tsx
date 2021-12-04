import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '../components/hooks/useTheme';

import Global from '../styles/Global';

export default function Appcontent({ Component, pageProps }: AppProps) {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
