import { Copyright } from '../Copyright/Copyright';
import { Socials } from '../Socials/Socials';
import { LinkButton } from '../LinkButton/LinkButton';
import { AccentText, Subtitle } from '../Typography/Typography';
import { StyledButtonWrapper, StyledText } from './Footer.styled';

export const Footer = () => {
  return (
    <footer id="contact">
      <Subtitle>contact</Subtitle>
      <StyledText>
        I&apos;m enthusiastic about <AccentText>networking</AccentText> with fellow{' '}
        <AccentText>professionals</AccentText> in the tech industry to explore opportunities, share
        ideas, and&nbsp;
        <AccentText>collaborate</AccentText> on projects.
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
