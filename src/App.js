import React from 'react';
import './App.css';
import SingleCountry from './pages/SingleCountry.js';
import NotFound from './pages/NotFound.js';
import Home from './pages/Home.js';
import useAnalytics from './hooks/useAnalytics.js';

import { Routes } from 'react-router-dom';

function App() {
  useAnalytics();

  return (
    <Routes>
      <SingleCountry path='/:countryCode' />
      <Home path='/' />
      <NotFound path='*' />
    </Routes>
  );
}

export default App;
