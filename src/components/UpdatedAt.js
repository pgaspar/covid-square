import React from 'react';
import './UpdatedAt.css';

function UpdatedAt({ updatedAt }) {
  const time = new Date(updatedAt);
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZoneName: 'short',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  return (
    <div className='UpdatedAt'>
      <div>Last updated at: {time.toLocaleString([], options)}</div>
    </div>
  );
}

export default UpdatedAt;
