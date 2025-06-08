import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import useThemeToggle from "./hooks/useThemeToggle";
import ColorModeContext from "./theme/colorModeContext";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GithubRepos from "./components/GithubRepos";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SEO from "./SEO";

function App() {
  const { colorMode, theme } = useThemeToggle();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SEO />
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GithubRepos />
        <Experience />
        <Contact />
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
