import { StyledContainer } from './Copyright.styled';

export const Copyright = () => {
  const year = new Date().getFullYear();

  return <StyledContainer>©️ {year} Nadishalowe</StyledContainer>;
};
