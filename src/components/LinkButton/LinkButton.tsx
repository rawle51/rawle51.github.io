import { PropsWithChildren } from 'react';
import { StyledLink } from './LinkButton.styled';

interface ButtonProps {
  href: string;
}

export const LinkButton = ({ children, href }: PropsWithChildren<ButtonProps>) => {
  return (
    <StyledLink href={href} target="_blank" rel="noreferrer">
      {children}
    </StyledLink>
  );
};
