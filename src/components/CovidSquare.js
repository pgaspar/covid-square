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
    width: `${Math.sqrt(casesPixels)}px`,
    height: `${Math.sqrt(casesPixels)}px`,
  };

  const deathsStyle = {
    width: `${Math.sqrt(deathsPixels)}px`,
    height: `${Math.sqrt(deathsPixels)}px`,
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
