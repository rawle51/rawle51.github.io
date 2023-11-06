import { ThemeProvider } from 'styled-components';
import { useThemeContext } from '../../services/theme.service';
import { Header } from '../Header/Header';
import { GlobalStyles, StyledContainer, StyledInner } from './App.styled';
import { Footer } from '../Footer/Footer';
import { AboutMe } from '../AboutMe/AboutMe';
import { Skills } from '../Skills/Skills';
import { WorkExperience } from '../WorkExperience/WorkExperience';

function App() {
  const { theme } = useThemeContext();

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <StyledContainer>
          <StyledInner>
            <Header />
            <main>
              <AboutMe />
              <Skills />
              <WorkExperience />
            </main>
            <Footer />
          </StyledInner>
        </StyledContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
