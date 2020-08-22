import React from 'react';
import './CovidSquare.css';

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

  return (
    <div className='CovidSquare'>
      <div className='CovidSquare-cases' style={casesStyle}>
        <div className='CovidSquare-deaths' style={deathsStyle}></div>
      </div>
    </div>
  );
}

export default CovidSquare;
