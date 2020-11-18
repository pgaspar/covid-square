import React, { useState, useEffect, useMemo } from 'react';
import CountryView from '../components/CountryView.js';
import Head from '../components/Head.js';
import CountrySelect from '../components/CountrySelect.js';
import axios from 'axios';
import { findCountry } from '../Countries.js';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound.js';

function SingleCountry() {
  const { countryCode } = useParams();

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

  return (
    <div className='App'>
      <Head innerTitle={country.name} />
      <CountrySelect />

      <div className='Main'>
        <CountryView country={country} data={data} />
      </div>
    </div>
  );
}

export default SingleCountry;
