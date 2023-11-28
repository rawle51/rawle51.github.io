import ReactCurvedText from 'react-curved-text';

import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import {
  StyledContainer,
  StyledLink,
  StyledLogo,
  StyledTopBlock,
  StyledNavWrapper,
  StyledImageWrapper,
  StyledCircle,
  StyledImage,
  StyledBottomBlock,
  StyledText,
  StyledTitle,
  StyledTextRow,
  StyledMiddleBlock,
} from './Header.styled';
import {
  ThemeType,
  primaryBlack,
  primaryWhite,
  useThemeContext,
} from '../../services/theme.service';

export const Header = () => {
  const { themeType } = useThemeContext();

  return (
    <StyledContainer>
      <StyledTopBlock>
        <StyledLogo>rawle</StyledLogo>
        <StyledNavWrapper>
          <StyledLink href="#contact">Contact</StyledLink>
          <ThemeSwitcher />
        </StyledNavWrapper>
      </StyledTopBlock>
      <StyledMiddleBlock>
        <StyledTextRow>
          <StyledTitle offsetLeft={200}>Software</StyledTitle>
        </StyledTextRow>
        <StyledTextRow>
          <StyledTitle>engineer</StyledTitle>
          <StyledTitle>Konstantin</StyledTitle>
        </StyledTextRow>
      </StyledMiddleBlock>
      <StyledBottomBlock>
        <div>
          <StyledText>
            Hey there, I&apos;m Konstantin.
            <br />
            A skilled individual hailing from Moscow
            <br />
            and presently based in Rotterdam.
          </StyledText>
        </div>
        <StyledTitle margin="left" offsetRight={300}>
          Antonov
        </StyledTitle>
        <StyledImageWrapper>
          <StyledImage width={380} height={221} src="/assets/main-photo.jpg" alt="Logo" />
          <StyledCircle>
            <ReactCurvedText
              width={240}
              height={240}
              cx={120}
              cy={120}
              rx={95}
              ry={95}
              reversed
              text="Rawle . Rawle . Rawle . Rawle . Rawle . Rawle . Rawle ."
              textProps={{ style: { fontSize: 20, textTransform: 'uppercase' } }}
              svgProps={{ fill: themeType === ThemeType.dark ? primaryWhite : primaryBlack }}
            />
          </StyledCircle>
        </StyledImageWrapper>
      </StyledBottomBlock>
    </StyledContainer>
  );
};
