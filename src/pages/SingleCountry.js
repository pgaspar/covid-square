import React, { useState, useEffect, useMemo } from 'react';
import CountryView from '../components/CountryView.js';
import Head from '../components/Head.js';
import axios from 'axios';
import Select from 'react-select';
import { countryOptions, findCountry } from '../Countries.js';
import { useParams, useNavigate } from 'react-router-dom';
import NotFound from './NotFound.js';

function SingleCountry() {
  const { countryCode } = useParams();
  const navigate = useNavigate();

  const country = useMemo(() => findCountry(countryCode), [countryCode]);
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `https://disease.sh/v3/covid-19/countries/${countryCode}`
      );

      setData(result.data);
    }

    if (country) {
      fetchData();
    }
  }, [countryCode, country]);

  if (!country) {
    return <NotFound />;
  }

  const customSelectStyles = {
    placeholder: (provided, state) => ({
      ...provided,
      color: '#585858',
    }),
  };

  return (
    <div className='App'>
      <Head innerTitle={country.name} />
      <Select
        options={countryOptions}
        onChange={(el) => navigate(`/${el.value}`)}
        placeholder='Select a country...'
        className='App-select'
        aria-label='Select a country'
        styles={customSelectStyles}
      />
      <div className='Main'>
        <CountryView country={country} data={data} />
      </div>
    </div>
  );
}

export default SingleCountry;
