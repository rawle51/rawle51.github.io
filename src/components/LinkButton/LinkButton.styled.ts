import styled from 'styled-components';
import { accentViolet, accentVioletActive, primaryWhite } from '../../services/theme.service';

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 24px;
  color: ${({ theme }) => theme.colors.primaryTextColor};
  border: 1px solid ${({ theme }) => theme.colors.primaryTextColor};
  border-radius: 24px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 150ms ease-in-out;

  &:hover {
    color: ${primaryWhite};
    background-color: ${accentViolet};
    border-color: ${accentViolet};
  }

  &:active {
    background-color: ${accentVioletActive};
    border-color: ${accentVioletActive};
  }
`;
