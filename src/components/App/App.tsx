import { ThemeProvider } from "styled-components";
import { useThemeContext } from "../../services/theme.service";
import { Header } from "../Header/Header";
import { GlobalStyles, StyledContainer, StyledInner } from "./App.styled";

function App() {
  const { theme } = useThemeContext();

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <StyledContainer>
          <StyledInner>
            <Header />
          </StyledInner>
        </StyledContainer>
      </ThemeProvider>
    </>
    
  );
}

export default App;
