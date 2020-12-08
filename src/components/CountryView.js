import React from 'react';
import CovidSquare from './CovidSquare.js';
import CountryStats from './CountryStats.js';
import UpdatedAt from './UpdatedAt.js';
import { Link } from 'react-router-dom';

function CountryView({ country, data, align = 'mixed' }) {
  const { cases, deaths, population } = data;

  return (
    <div className={`CountryView CountryView--${align}`}>
      <header className='App-header'>
        <h1 className='App-title'>
          Covid cases and deaths:
          <span>{country.name}</span>
        </h1>
      </header>
      <main className='App-main'>
        <div className='App-square'>
          <CovidSquare total={population} cases={cases} deaths={deaths} />
          <UpdatedAt updatedAt={data.updated} />
        </div>
        <CountryStats {...data} />
      </main>

      <nav>
        <Link to={'/'} className='Button'>
          ⬅ Back
        </Link>
      </nav>
    </div>
  );
}

export default CountryView;
