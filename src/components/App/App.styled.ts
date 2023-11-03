import styled, { createGlobalStyle } from 'styled-components';

export const StyledContainer = styled.div`
  min-height: 100vh;
  padding: 32px 0;
  background-color: ${({ theme }) => theme.colors.primaryBackgroundColor};
  color: ${({ theme }) => theme.colors.primaryTextColor};

`;

export const StyledInner = styled.div`
  max-width: 1200px;
  padding: 0 32px;
  margin: 0 auto;
`;

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
  }
`;