import React from 'react';
import Head from '../components/Head.js';
import CountrySelect from '../components/CountrySelect.js';
import './Home.css';
import CountryList from '../components/CountryList.js';

const POPULAR_COUNTRIES = [
  'USA',
  'GBR',
  'FRA',
  'ESP',
  'ITA',
  'PRT',
  'CHN',
  'BRA',
  'RUS',
];

function Home() {
  return (
    <div className='App Home'>
      <Head />

      <header className='Home-header'>
        <div className='Home-logo'>
          <img
            src='/logo192.png'
            alt='Covid Square Logo'
            width='80px'
            height='80px'
          />
        </div>
        <div className='Home-title'>
          <h1>Covid Square</h1>
          <p className='Home-subtitle'>
            Compare Covid cases and deaths to your country's total population.
          </p>
        </div>
      </header>

      <main>
        <h2>Please select a country below:</h2>
        <CountrySelect />

        <div className='Home-countryListSection'>
          <h2>Or pick one of these:</h2>
          <CountryList countryCodes={POPULAR_COUNTRIES} />
        </div>
      </main>
    </div>
  );
}

export default Home;
