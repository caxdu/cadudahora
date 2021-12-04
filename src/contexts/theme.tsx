/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, ReactNode, useCallback, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import darkTheme from '../styles/themes/dark';
import lightTheme from '../styles/themes/light';

interface ThemeContextData {
  theme: DefaultTheme;
  switchTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData,
);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);

  const switchTheme = useCallback(() => {
    setTheme(state => (state.title === 'light' ? darkTheme : lightTheme));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
