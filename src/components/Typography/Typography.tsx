import { ReactNode } from 'react';

import { StyledAccentText, StyledSectionText, StyledSubtitle } from './Typography.styled';

interface TypographyProps {
  children: ReactNode;
}

export const Subtitle = ({ children }: TypographyProps) => (
  <StyledSubtitle>({children})</StyledSubtitle>
);

export const SectionText = ({ children }: TypographyProps) => (
  <StyledSectionText>{children}</StyledSectionText>
);

export const AccentText = ({ children }: TypographyProps) => (
  <StyledAccentText>{children}</StyledAccentText>
);
