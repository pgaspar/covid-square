import React from 'react';
import whiteLogo from '../bmc-white.svg';
import './BuyMeACoffee.css';

function BuyMeACoffee() {
  const url = 'https://www.buymeacoffee.com/pedrogaspar';
  return (
    <a href={url} target='_blank' rel='noreferrer' className='BuyMeACoffee'>
      <img
        src={whiteLogo}
        alt='Buy Me A Coffee'
        height='35px'
        width='126.6px'
      />
    </a>
  );
}

export default BuyMeACoffee;
