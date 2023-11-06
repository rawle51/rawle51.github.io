import { useThemeContext, ThemeType } from '../../services/theme.service';
import { StyledSwitcher } from './ThemeSwitcher.styled';

export const ThemeSwitcher = () => {
  const { themeType, setTheme } = useThemeContext();
  const handleChange = () => {
    setTheme();
  };

  return <StyledSwitcher onClick={handleChange} isSelected={themeType === ThemeType.dark} />;
};
