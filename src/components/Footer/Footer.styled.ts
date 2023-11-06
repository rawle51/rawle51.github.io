import styled from 'styled-components';

import { StyledSectionText } from '../Typography/Typography.styled';

export const StyledText = styled(StyledSectionText)`
  margin: 30px 0 60px;
`;

export const StyledButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 380px);
  gap: 20px;
  margin-bottom: 60px;
`;
