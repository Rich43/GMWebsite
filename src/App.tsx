import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HideOnMobile } from './components/HideOnMobile';
import { Layout } from './components/Layout';
import { Navigation } from './components/Navigation';
import { ScrollToTop } from './components/ScrollToTop';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Homepage } from './pages/Homepage';
import { NotFound } from './pages/NotFound';
import { Portfolio } from './pages/Portfolio';
import { greyscale, main } from './theme';

const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

const App: FunctionComponent = function App() {
  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={main}>
        <CssBaseline />
        <BrowserRouter>
          <ScrollToTop />
          <ThemeProvider theme={greyscale}>
            <Navigation />
          </ThemeProvider>
          <Layout>
            <Routes>
              <Route path="/" element={Homepage} />
              <>
                <HideOnMobile>
                  <Header />
                </HideOnMobile>
                <Routes>
                  <Route path="/about" element={About} />
                  <Route path="/contact" element={Contact} />
                  <Route path="/portfolio" element={Portfolio} />
                  <Route element={NotFound} />
                </Routes>
              </>
            </Routes>
          </Layout>
          <ThemeProvider theme={greyscale}>
            <Footer />
          </ThemeProvider>
        </BrowserRouter>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
