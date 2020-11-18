import React from 'react';
import Select from 'react-select';
import { countryOptions } from '../Countries.js';
import { useNavigate } from 'react-router-dom';
import './CountrySelect.css';

function CountrySelect() {
  const navigate = useNavigate();

  const customSelectStyles = {
    placeholder: (provided, state) => ({
      ...provided,
      color: '#585858',
    }),
  };

  return (
    <Select
      options={countryOptions}
      onChange={(el) => navigate(`/${el.value}`)}
      placeholder='Select a country...'
      className='CountrySelect'
      aria-label='Select a country'
      styles={customSelectStyles}
    />
  );
}

export default CountrySelect;
