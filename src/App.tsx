import * as React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { Header } from './epic/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProjectsPage } from './pages/projects';
import { CertificationsPage } from './pages/certifications';

import { theme } from 'theme/extend';

import './App.scss';
import { PortraitPage } from 'pages/portrait';

export const App = () => (
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <Box>
        <div className="app">
          <div className="layout">
            <Header />
            <Routes>
              <Route index element={<PortraitPage />} />
              <Route path="/" element={<PortraitPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/certifications" element={<CertificationsPage />} />
            </Routes>
          </div>
        </div>
      </Box>
    </ChakraProvider>
  </BrowserRouter>
);
