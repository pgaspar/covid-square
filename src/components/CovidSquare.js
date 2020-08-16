import React from 'react';
import './CovidSquare.css';

function CovidSquare({ width = 500, total, cases, deaths }) {
  const totalPixels = width * width;
  const casesPixels = (cases * totalPixels) / total;
  const deathsPixels = (deaths * totalPixels) / total;

  const totalStyle = {
    width: `${width}px`,
    height: `${width}px`,
  };

  const casesStyle = {
    width: `${Math.sqrt(casesPixels / totalPixels) * 100}%`,
    height: `${Math.sqrt(casesPixels / totalPixels) * 100}%`,
  };

  const deathsStyle = {
    width: `${Math.sqrt(deathsPixels / casesPixels) * 100}%`,
    height: `${Math.sqrt(deathsPixels / casesPixels) * 100}%`,
  };

  return (
    <div className='CovidSquare' style={totalStyle}>
      <div className='CovidSquare-cases' style={casesStyle}>
        <div className='CovidSquare-deaths' style={deathsStyle}></div>
      </div>
    </div>
  );
}

export default CovidSquare;
