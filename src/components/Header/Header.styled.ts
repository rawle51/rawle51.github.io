import styled, { keyframes } from 'styled-components';
import { accentViolet, accentVioletActive } from '../../services/theme.service';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledContainer = styled.header`
  margin-bottom: 280px;
`;

export const StyledTopBlock = styled.div`
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
  transition: color 150ms ease-in;

  &:hover {
    color: ${accentViolet};
  }

  &:active {
    color: ${accentVioletActive};
  }
`;

export const StyledNavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const StyledMiddleBlock = styled.div`
  margin-top: 60px;
`;

export const StyledTextRow = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  z-index: 10;
`;

export const StyledTitle = styled.p.withConfig({
  shouldForwardProp: (prop: string) => !['offsetLeft', 'offsetRight'].includes(prop),
})<{
  offsetLeft?: number;
  offsetRight?: number;
  margin?: 'left' | 'right';
}>`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.xxl}px;
  font-family: 'Soyuz Grotesk', 'Roboto', sans-serif;
  text-transform: uppercase;
  padding-left: ${({ offsetLeft }) => offsetLeft ?? 0}px;
  padding-right: ${({ offsetRight }) => offsetRight ?? 0}px;

  ${({ margin }) => margin && `margin-${margin}: auto`};
`;

export const StyledBottomBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  z-index: 1;
`;

export const StyledImageWrapper = styled.div`
  position: absolute;
  display: block;
  content: '';
  top: 0;
  right: 0;
  z-index: -1;
`;

export const StyledImage = styled.img`
  position: relative;
  z-index: 1;
`;

export const StyledCircle = styled.div`
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
  align-self: center;
`;
