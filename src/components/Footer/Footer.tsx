import { Copyright } from '../Copyright/Copyright';
import { Socials } from '../Socials/Socials';
import { LinkButton } from '../LinkButton/LinkButton';
import { AccentText, Subtitle } from '../Typography/Typography';
import { StyledButtonWrapper, StyledText } from './Footer.styled';

export const Footer = () => {
  return (
    <footer id="contact">
      <Subtitle>contacts</Subtitle>
      <StyledText>
        I am <AccentText>eager</AccentText> to connect with others in the tech industry to discuss
        opportunities, exchange ideas and thoughts, or collaborate on projects.
      </StyledText>
      <StyledButtonWrapper>
        <LinkButton href="mailto:51stateco@gmail.com">Drop me an email</LinkButton>
        <LinkButton href="/assets/Konstantin_Antonov_CV.pdf">My CV</LinkButton>
      </StyledButtonWrapper>
      <Socials />
      <Copyright />
    </footer>
  );
};
