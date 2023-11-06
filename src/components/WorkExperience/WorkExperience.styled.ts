import styled from 'styled-components';
import { accentViolet, primaryWhite } from '../../services/theme.service';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-bottom: 280px;
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledSkillsWrapper = styled.p`
  margin: 0;
  display: flex;
  gap: 8px;
`;

export const StyledBadge = styled.span`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  color: ${primaryWhite};
  background-color: ${accentViolet};
  border-radius: 16px;
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
`;
