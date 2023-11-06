import styled from 'styled-components';

export const StyledSubtitle = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  text-transform: uppercase;
  font-weight: 400;
`;

export const StyledSectionText = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export const StyledAccentText = styled.span`
  color: ${({ theme }) => theme.colors.accentTextColor};
`;
