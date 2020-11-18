import React from 'react';
import Head from '../components/Head.js';
import CountrySelect from '../components/CountrySelect.js';

function NotFound() {
  return (
    <div className='App'>
      <Head innerTitle='404' />

      <h1>Not Found</h1>

      <h2>Please select a country below:</h2>
      <CountrySelect />
    </div>
  );
}

export default NotFound;
