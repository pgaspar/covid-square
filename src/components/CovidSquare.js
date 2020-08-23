import React from 'react';
import './CovidSquare.css';
import Legend from './CovidSquare/Legend.js';

function CovidSquare({ total, cases, deaths }) {
  const casesPercentage = cases / total;
  const deathsPercentage = deaths / total;

  const casesStyle = {
    width: `${Math.sqrt(casesPercentage) * 100}%`,
    height: `${Math.sqrt(casesPercentage) * 100}%`,
  };

  const deathsStyle = {
    width: `${Math.sqrt(deathsPercentage / casesPercentage) * 100}%`,
    height: `${Math.sqrt(deathsPercentage / casesPercentage) * 100}%`,
  };

  const totalTitle = total && `Population: ${total.toLocaleString()}`;
  const casesTitle = cases && `Confirmed: ${cases.toLocaleString()}`;
  const deathsTitle = deaths && `Deaths: ${deaths.toLocaleString()}`;

  return (
    <div className='CovidSquare' title={totalTitle}>
      <div className='CovidSquare-cases' style={casesStyle} title={casesTitle}>
        <div
          className='CovidSquare-deaths'
          style={deathsStyle}
          title={deathsTitle}
        ></div>
      </div>
      {total && (
        <Legend total={totalTitle} cases={casesTitle} deaths={deathsTitle} />
      )}
    </div>
  );
}

export default CovidSquare;
