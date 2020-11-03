import React, { useState, useEffect } from 'react';
import './App.css';
import CovidSquare from './components/CovidSquare.js';
import CountryStats from './components/CountryStats.js';
import Head from './components/Head.js';
import UpdatedAt from './components/UpdatedAt.js';
import axios from 'axios';
import Select from 'react-select';
import { countryOptions, findCountry } from './Countries.js';
import ReactGA from 'react-ga';

const FALLBACK_COUNTRY = 'PRT';

function App() {
  const urlCountryCode = window.location.pathname.slice(1);
  let initialCountry = findCountry(urlCountryCode);
  if (!initialCountry) {
    initialCountry = findCountry(FALLBACK_COUNTRY);
    window.history.replaceState({ country: initialCountry }, null, '/');
  }

  const [country, setCountry] = useState(initialCountry);
  const [data, setData] = useState({});
  const { cases, deaths, population } = data;

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `https://disease.sh/v3/covid-19/countries/${country.code}`
      );

      setData(result.data);
    }
    fetchData();
  }, [country]);

  useEffect(() => {
    window.onpopstate = (event) => {
      if (event.state.country) {
        setCountry(event.state.country);
      }
    };
  });

  useEffect(() => {
    ReactGA.pageview(
      window.location.pathname,
      null,
      `Covid Square: ${country.name}`
    );
  }, [country]);

  const onSelect = (e) => {
    const newCountry = findCountry(e.value) || findCountry(FALLBACK_COUNTRY);
    window.history.pushState(
      { country: newCountry },
      null,
      `/${newCountry.code}`
    );
    setCountry(newCountry);
  };

  const customSelectStyles = {
    placeholder: (provided, state) => ({
      ...provided,
      color: '#585858',
    }),
  };

  return (
    <div className='App'>
      <Head country={country} />
      <header className='App-header'>
        <Select
          options={countryOptions}
          onChange={onSelect}
          placeholder='Select a country...'
          className='App-select'
          aria-label='Select a country'
          styles={customSelectStyles}
        />
        <h1 className='App-title'>
          Covid cases and deaths:
          <span>{country.name}</span>
        </h1>
        <CovidSquare total={population} cases={cases} deaths={deaths} />
        <UpdatedAt updatedAt={data.updated} />
      </header>
      <CountryStats {...data} />
    </div>
  );
}

export default App;
