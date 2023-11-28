import { createContext, useContext, useState, ReactNode, useEffect, useMemo } from 'react';

const INITIAL_THEME_VALUE = 'initial-theme';

export enum ThemeType {
  light = 'light',
  dark = 'dark',
}

export const primaryBlack = '#191919';
export const primaryWhite = '#fff';
export const accentViolet = '#9747ff';
export const accentVioletActive = '#8539e7';
const neutralBlack = '#1e1e1e';
const secondaryWhite = '#f6f6f6';
const secondaryBlack = '#939393';

type FontSize = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

interface ThemeShape {
  colors: {
    primaryTextColor: string;
    primaryBackgroundColor: string;
    secondaryTextColor: string;
    secondaryBackgroundColor: string;
    accentTextColor: string;
  };
  fontSizes: Record<FontSize, number>;
}

const fontSizes: Record<FontSize, number> = {
  xs: 16,
  s: 20,
  m: 24,
  l: 48,
  xl: 70,
  xxl: 110,
};

const themeShape: Record<ThemeType, ThemeShape> = {
  [ThemeType.light]: {
    colors: {
      primaryTextColor: primaryBlack,
      primaryBackgroundColor: primaryWhite,
      secondaryTextColor: primaryBlack,
      secondaryBackgroundColor: secondaryWhite,
      accentTextColor: accentViolet,
    },
    fontSizes,
  },
  [ThemeType.dark]: {
    colors: {
      primaryTextColor: primaryWhite,
      primaryBackgroundColor: primaryBlack,
      secondaryTextColor: secondaryBlack,
      secondaryBackgroundColor: neutralBlack,
      accentTextColor: primaryWhite,
    },
    fontSizes,
  },
};

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
  const themeFromLocalStorage = localStorage.getItem(INITIAL_THEME_VALUE) as ThemeType | null;
  const [themeType, setTheme] = useState<ThemeType>(themeFromLocalStorage ?? ThemeType.dark);

  const handleThemeChange = () => {
    setTheme((theme) => {
      const newTheme = theme === ThemeType.dark ? ThemeType.light : ThemeType.dark;
      localStorage.setItem(INITIAL_THEME_VALUE, newTheme);

      return newTheme;
    });
  };

  useEffect(() => {
    if (!themeFromLocalStorage) {
      localStorage.setItem(INITIAL_THEME_VALUE, ThemeType.dark);
    }
  }, [themeFromLocalStorage]);

  const value = useMemo(
    () => ({
      themeType,
      theme: themeShape[themeType],
      setTheme: handleThemeChange,
    }),
    [themeType],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export function useThemeContext() {
  return useContext(ThemeContext);
}
