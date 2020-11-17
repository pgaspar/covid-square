import React from 'react';
import { Helmet } from 'react-helmet';

function Head({ country }) {
  const title = `Covid Square: ${country.name}`;
  const publicUrl = process.env.URL || 'https://covid-square.com';

  return (
    <Helmet>
      <title>{title}</title>
      <link rel='canonical' href={publicUrl} />
    </Helmet>
  );
}

export default Head;
