import { Subtitle } from '../Typography/Typography';
import { StyledSectionText } from '../Typography/Typography.styled';
import { StyledContainer } from './AboutMe.styled';

export const AboutMe = () => (
  <StyledContainer>
    <Subtitle>about me</Subtitle>
    <StyledSectionText>
      As a highly skilled software engineer, I specialize in frontend development while also
      possessing considerable backend expertise. With a passion for innovation and a talent for
      creating high-performance applications, I enjoy sharing my knowledge and mentoring aspiring
      developers.
    </StyledSectionText>
  </StyledContainer>
);
