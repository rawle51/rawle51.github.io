import styled, { createGlobalStyle } from 'styled-components';

export const StyledContainer = styled.div`
  min-height: 100vh;
  padding: 32px 0;
  background-color: ${({ theme }) => theme.colors.primaryBackgroundColor};
  color: ${({ theme }) => theme.colors.primaryTextColor};
  transition:
    background-color 150ms ease-in,
    color 150ms ease-in;
`;

export const StyledInner = styled.div`
  max-width: 1240px;
  padding: 0 20px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
  }
`;
