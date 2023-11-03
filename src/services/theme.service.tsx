import { createContext, useContext, useState, ReactNode } from 'react';

export enum ThemeType {
  light = 'light',
  dark = 'dark',
}

export const primaryBlack = '#191919';
export const primaryWhite = '#fff'

type FontSize = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

interface ThemeShape {
  colors: {
    primaryTextColor: string;
    primaryBackgroundColor: string;
  };
  fontSizes: Record<FontSize, number>
}

const fontSizes: Record<FontSize, number> = {
  xs: 16,
  s: 20,
  m: 24,
  l: 48,
  xl: 70,
  xxl: 120,
}

const themeShape: Record<ThemeType, ThemeShape> = {
  [ThemeType.light]: {
    colors: {
      primaryTextColor: primaryBlack,
      primaryBackgroundColor: primaryWhite,
    },
    fontSizes,
  },
  [ThemeType.dark]: {
    colors: {
      primaryTextColor: primaryWhite,
      primaryBackgroundColor: primaryBlack,
    },
    fontSizes,
  },
}

interface ThemeContextShape {
  themeType: ThemeType;
  theme: ThemeShape;
  setTheme: () => void;
}

const ThemeContext = createContext<ThemeContextShape>({
  themeType: ThemeType.dark,
  theme: themeShape[ThemeType.dark],
  setTheme: () => {},
});

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [themeType, setTheme] = useState<ThemeType>(ThemeType.dark);

  const handleThemeChange = () => {
    setTheme((theme) => theme === ThemeType.dark ? ThemeType.light : ThemeType.dark);
  }

  const value = {
    themeType,
    theme: themeShape[themeType],
    setTheme: handleThemeChange,
  }
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}


export function useThemeContext() {
  return useContext(ThemeContext);
}