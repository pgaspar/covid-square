import React, { Suspense, lazy } from 'react';
import './App.css';
import useAnalytics from './hooks/useAnalytics.js';
import useScrollToTop from './hooks/useScrollToTop.js';

import { Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home.js'));
const SingleCountry = lazy(() => import('./pages/SingleCountry.js'));
const NotFound = lazy(() => import('./pages/NotFound.js'));

function App() {
  useAnalytics();
  useScrollToTop();

  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <SingleCountry path='/:countryCode' />
        <Home path='/' />
        <NotFound path='*' />
      </Routes>
    </Suspense>
  );
}

export default App;
