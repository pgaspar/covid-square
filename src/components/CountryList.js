import React, { useEffect, useMemo, useReducer } from 'react';
import axios from 'axios';
import { findCountry } from '../Countries.js';
import CovidLine from './CovidLine.js';
import { Link } from 'react-router-dom';
import './CountryList.css';

const countryDataReducer = (countryData, newCountryData) => {
  return { ...countryData, ...newCountryData };
};

const COUNTRY_NAME_OVERRIDE = {
  USA: 'USA',
  GBR: 'UK',
};

function CountryList({ countryCodes }) {
  // Can we simplify this a bit?
  const countries = useMemo(
    () =>
      countryCodes.map((countryCode) => {
        let country = findCountry(countryCode);

        if (COUNTRY_NAME_OVERRIDE[country.code]) {
          country.name = COUNTRY_NAME_OVERRIDE[country.code];
        }

        return country;
      }),
    [countryCodes]
  );

  const [countryData, dispatch] = useReducer(countryDataReducer, {});

  useEffect(() => {
    countries.forEach((country) => {
      axios
        .get(`https://disease.sh/v3/covid-19/countries/${country.code}`)
        .then((result) => {
          let newCountryData = {};
          newCountryData[country.code] = {
            cases: result.data.cases,
            deaths: result.data.deaths,
            total: result.data.population,
          };

          dispatch(newCountryData);
        });
    });
  }, [countries]);

  return (
    <ul className='CountryList'>
      {countries.map((country, i) => (
        <li key={i}>
          <Link to={`/${country.code}`}>
            <div className='CountryList-name'>{country.name}</div>
            <CovidLine {...countryData[country.code]} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CountryList;
