import React from 'react';
import Head from '../components/Head.js';
import Select from 'react-select';
import { countryOptions } from '../Countries.js';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  let navigate = useNavigate();

  const customSelectStyles = {
    placeholder: (provided, state) => ({
      ...provided,
      color: '#585858',
    }),
  };

  return (
    <div className='App'>
      <Head innerTitle='404' />

      <h1>Not Found</h1>
      <h2>Please select a country below:</h2>

      <Select
        options={countryOptions}
        onChange={(el) => navigate(`/${el.value}`)}
        placeholder='Select a country...'
        className='App-select'
        aria-label='Select a country'
        styles={customSelectStyles}
      />
    </div>
  );
}

export default NotFound;
