import { useRouter } from 'next/router';
import Link from 'next/link';
import Switch from 'react-switch';

import { Container } from './styles';
import { useTheme } from '../../hooks/useTheme';

export function Header() {
  const { theme, switchTheme } = useTheme();
  const { asPath } = useRouter();

  return (
    <Container>
      <img src="logo.svg" alt="Dahora logo" />

      <nav>
        <Link href="#start">
          <a className={asPath === '/' || asPath === '/#start' ? 'active' : ''}>
            INÍCIO
          </a>
        </Link>

        <Link href="#whoami">
          <a className={asPath === '/#whoami' ? 'active' : ''}>QUEM SOU EU ?</a>
        </Link>

        <Link href="#portfolio">
          <a className={asPath === '/#portfolio' ? 'active' : ''}>PORTFÓLIO</a>
        </Link>

        <Link href="#pricing">
          <a className={asPath === '/#pricing' ? 'active' : ''}>ORÇAMENTO</a>
        </Link>
      </nav>

      <Switch
        checked={theme.title === 'dark'}
        onChange={switchTheme}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor={theme.colors.purple}
        onHandleColor={theme.colors.background_primary}
        offColor={theme.colors.background_secondary}
        offHandleColor={theme.colors.purple}
      />
    </Container>
  );
}
