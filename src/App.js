import React, { useState, useEffect } from 'react';
import './App.css';
import CovidSquare from './components/CovidSquare.js';
import axios from 'axios';
import Select from 'react-select';
import { countryOptions } from './Countries.js';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const defaultCountry = urlParams.get('country') || 'Portugal';

  const [country, setCountry] = useState(defaultCountry);
  const [data, setData] = useState({});
  const { cases, deaths, population } = data;

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `https://disease.sh/v3/covid-19/countries/${country}`
      );

      setData(result.data);
    }
    fetchData();
  }, [country]);

  const onSelect = (e) => {
    window.history.pushState({}, null, `?country=${e.value}`);
    setCountry(e.value);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <Select
          options={countryOptions}
          onChange={onSelect}
          placeholder='Select a country...'
          className='App-select'
        />
        <h1>{`Covid cases and deaths in ${country}`}</h1>
        <CovidSquare total={population} cases={cases} deaths={deaths} />
      </header>
    </div>
  );
}

export default App;
