import { AccentText, Subtitle } from '../Typography/Typography';
import { StyledSectionText } from '../Typography/Typography.styled';
import { StyledContainer } from './AboutMe.styled';

export const AboutMe = () => (
  <StyledContainer>
    <Subtitle>about me</Subtitle>
    <StyledSectionText>
      As a software engineer, I focus on <AccentText>frontend</AccentText> development while also
      possessing significant <AccentText>backend</AccentText> expertise. Fueled by a passion for
      innovation and a knack for crafting high-performance applications, I take pleasure in
      imparting my knowledge and <AccentText>mentoring</AccentText> aspiring developers.
    </StyledSectionText>
  </StyledContainer>
);
