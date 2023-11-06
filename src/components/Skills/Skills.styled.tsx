import styled from 'styled-components';
import { accentViolet } from '../../services/theme.service';

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-bottom: 280px;
`;

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledListItem = styled.li`
  min-height: 424px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};
  border-radius: 8px;
`;

export const StyledIcon = styled.span.withConfig({
  shouldForwardProp: (prop: unknown) => prop !== 'src',
})<{ src: string }>`
  width: 60px;
  height: 60px;
  margin-bottom: 24px;
  border-radius: 8px;
  background-color: ${accentViolet};
  background-image: ${({ src }) => `url('${src}')`};
  background-repeat: no-repeat;
  background-position: center;
`;

export const StyledTitle = styled.h4`
  margin: 0 0 32px;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  text-transform: uppercase;
  font-weight: 400;
`;

export const StyledText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
`;

export const StyledNum = styled(StyledText)`
  align-self: flex-end;
  margin-top: auto;
`;
