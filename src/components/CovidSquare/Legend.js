import React from 'react';
import './Legend.css';

function Legend({ total, cases, deaths }) {
  return (
    <div className='Legend'>
      <div className='Legend-item Legend-total'>{total}</div>
      <div className='Legend-item Legend-cases'>{cases}</div>
      <div className='Legend-item Legend-deaths'>{deaths}</div>
    </div>
  );
}

export default Legend;
