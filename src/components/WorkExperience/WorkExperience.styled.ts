import styled, { css } from 'styled-components';
import { accentViolet, primaryWhite } from '../../services/theme.service';
import { ArrowIcon } from '../icons';

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-bottom: 280px;
  font-weight: 400;
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  text-transform: uppercase;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryTextColor};

  &:first-of-type {
    border-top: 1px solid ${({ theme }) => theme.colors.secondaryTextColor};
  }
`;

export const StyledPanel = styled.div`
  display: grid;
  grid-template-columns: 1fr 380px;
  cursor: pointer;
`;

export const StyledTitle = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  font-weight: inherit;
`;

export const StyledDate = styled.p`
  margin: 0 0 24px;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
`;

export const StyledPositionWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const StyledSectionSubtitle = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  white-space: pre-line;
`;

export const StyledIcon = styled(ArrowIcon)<{ open: boolean }>`
  fill: ${({ theme }) => theme.colors.primaryTextColor};
  transform: rotate(90deg);
  transition: transform 150ms ease-out;

  ${({ open }) =>
    open &&
    css`
      transform: rotate(0);
    `}
`;

export const StyledExpandedSection = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-self: flex-end;
`;

export const StyledDescription = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  text-transform: none;
`;

export const StyledSkillsWrapper = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
`;

export const StyledBadge = styled.span`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  color: ${primaryWhite};
  background-color: ${accentViolet};
  border-radius: 16px;
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  text-transform: none;
`;
