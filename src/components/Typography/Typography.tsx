import { ReactNode } from 'react';

import { StyledAccentText, StyledSubtitle } from './Typography.styled';

interface TypographyProps {
  children: ReactNode;
}

export const Subtitle = ({ children }: TypographyProps) => (
  <StyledSubtitle>({children})</StyledSubtitle>
);

export const AccentText = ({ children }: TypographyProps) => (
  <StyledAccentText>{children}</StyledAccentText>
);
