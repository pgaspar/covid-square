import React, { useMemo } from 'react';
import Head from '../components/Head.js';
import CountrySelect from '../components/CountrySelect.js';
import { findCountry } from '../Countries.js';
import { Link } from 'react-router-dom';
import './Home.css';
import CovidLine from '../components/CovidLine.js';

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
  const popularCountriesList = useMemo(() => {
    return (
      <ul className='Home-countryList'>
        {POPULAR_COUNTRIES.map((countryCode, i) => {
          const country = findCountry(countryCode);
          return (
            <li key={i}>
              <Link to={`/${countryCode}`}>
                <div className='Home-countryList-name'>{country.name}</div>
                <CovidLine />
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }, []);

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
          {popularCountriesList}
        </div>
      </main>
    </div>
  );
}

export default Home;
