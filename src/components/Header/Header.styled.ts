import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledContainer = styled.header`
`;

export const StyledTopBlock = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const StyledLogo = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-family: 'Soyuz Grotesk', 'Roboto', sans-serif;
  cursor: default;
`;

export const StyledLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  color: ${({ theme }) => theme.colors.primaryTextColor};
`;

export const StyledNavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const StyledMiddleBlock = styled.div`
  margin-top: 120px;
`;

export const StyledTextRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledTitle = styled.p<{ offesetLeft?: number; offesetRight?: number; align?: 'left' | 'right' }>`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.xxl}px;
  font-family: 'Soyuz Grotesk', 'Roboto', sans-serif;
  text-transform: uppercase;
  padding-left: ${({ offesetLeft }) => offesetLeft ?? 0}px;
  padding-right: ${({ offesetRight }) => offesetRight ?? 0}px;

  ${({ align }) => align && `margin-${align}: auto`};
`;

export const StyledBottomBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

export const StyledImageWrapper = styled.div`
  position: relative;
`;

export const StyledImage = styled.img`
  position: relative;
  z-index: 1;
`;

export const StyledCicle = styled.div`
  position: absolute;
  display: block;
  left: -120px;
  bottom: -120px;
  width: 240px;
  animation: ${rotate} 10s linear infinite;
`;

export const StyledText = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
`;
