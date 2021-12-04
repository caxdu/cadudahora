import { AppProps } from 'next/app';
import { ThemeProvider as ThemeSwitcherProvider } from '../contexts/theme';
import Appcontent from './_appcontent';

function MyApp(props: AppProps) {
  return (
    <ThemeSwitcherProvider>
      <Appcontent {...props} />
    </ThemeSwitcherProvider>
  );
}

export default MyApp;
