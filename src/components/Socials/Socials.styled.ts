import styled from 'styled-components';

import { accentViolet, accentVioletActive } from '../../services/theme.service';
import { ArrorIcon } from '../icons/Arror';

export const StyledList = styled.ul`
  display: flex;
  gap: 60px;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  padding: 0 0 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryTextColor};
`;

export const StyledItem = styled.li`
  text-transform: uppercase;
`;

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  color: ${({ theme }) => theme.colors.primaryTextColor};
  transition: color fill 150ms ease-in;

  svg {
    fill: ${({ theme }) => theme.colors.primaryTextColor};
  }

  &:hover {
    color: ${accentViolet};

    svg {
      fill: ${accentViolet};
    }
  }

  &:active {
    color: ${accentVioletActive};

    svg {
      fill: ${accentViolet};
    }
  }
`;
