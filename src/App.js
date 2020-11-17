import React from 'react';
import './App.css';
import SingleCountry from './pages/SingleCountry.js';
import NotFound from './pages/NotFound.js';

import { BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <SingleCountry path='/:countryCode' />
        <NotFound path='*' />
      </Routes>
    </Router>
  );
}

export default App;
