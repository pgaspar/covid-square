import React from 'react';
import './CovidLine.css';

function CovidLine({ total, cases, deaths }) {
  let casesStyle = {};
  let deathsStyle = {};

  if (total !== undefined) {
    const casesPercentage = cases / total;
    const deathsPercentage = deaths / total;

    casesStyle = {
      width: `${casesPercentage * 100}%`,
      height: '100%',
    };

    deathsStyle = {
      width: `${(deathsPercentage / casesPercentage) * 100}%`,
      height: '100%',
    };
  }

  const totalTitle = `Population: ${total && total.toLocaleString()}`;
  const casesTitle = `Confirmed: ${cases && cases.toLocaleString()}`;
  const deathsTitle = `Deaths: ${deaths && deaths.toLocaleString()}`;

  return (
    <div className='CovidLine' title={totalTitle}>
      <div className='CovidLine-cases' style={casesStyle} title={casesTitle}>
        <div
          className='CovidLine-deaths'
          style={deathsStyle}
          title={deathsTitle}
        ></div>
      </div>
    </div>
  );
}

export default CovidLine;
