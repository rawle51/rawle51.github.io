import ReactCurvedText from 'react-curved-text';

import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import {
  StyledContainer,
  StyledLink,
  StyledLogo,
  StyledTopBlock,
  StyledNavWrapper,
  StyledImageWrapper,
  StyledCicle,
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
          <StyledTitle offesetLeft={170}>Software</StyledTitle>
        </StyledTextRow>
        <StyledTextRow>
          <StyledTitle>engineer</StyledTitle>
          <StyledTitle>Konstantin</StyledTitle>
        </StyledTextRow>
        <StyledTextRow>
          <StyledTitle margin="left" offesetRight={320}>
            Antonov
          </StyledTitle>
        </StyledTextRow>
      </StyledMiddleBlock>
      <StyledBottomBlock>
        <StyledText>
          Hey there! I'm Konstantin, originally from Moscow
          and currently residing in Rotterdam.
        </StyledText>
        <StyledImageWrapper>
          <StyledImage width={380} height={221} src="/assets/main-photo.jpg" alt="Logo" />
          <StyledCicle>
            <ReactCurvedText
              width={240}
              height={240}
              cx={120}
              cy={120}
              rx={95}
              ry={95}
              reversed={true}
              text="Rawle . Rawle . Rawle . Rawle . Rawle . Rawle . Rawle ."
              textProps={{ style: { fontSize: 20, textTransform: 'uppercase' } }}
              svgProps={{ fill: themeType === ThemeType.dark ? primaryWhite : primaryBlack }}
            />
          </StyledCicle>
        </StyledImageWrapper>
      </StyledBottomBlock>
    </StyledContainer>
  );
};
