import React, { useState, useEffect } from 'react';
import './App.css';
import CovidSquare from './components/CovidSquare.js';
import Head from './components/Head.js';
import axios from 'axios';
import Select from 'react-select';
import { countryOptions, findCountry } from './Countries.js';

const FALLBACK_COUNTRY = 'PRT';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  let initialCountry = findCountry(urlParams.get('country'));
  if (!initialCountry) {
    initialCountry = findCountry(FALLBACK_COUNTRY);
    window.history.replaceState({}, null, `?country=${initialCountry.code}`);
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

  const onSelect = (e) => {
    const newCountry = findCountry(e.value) || findCountry(FALLBACK_COUNTRY);
    window.history.pushState({}, null, `?country=${newCountry.code}`);
    setCountry(newCountry);
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
        />
        <h1>{`Covid cases and deaths: ${country.name}`}</h1>
        <CovidSquare total={population} cases={cases} deaths={deaths} />
      </header>
    </div>
  );
}

export default App;
