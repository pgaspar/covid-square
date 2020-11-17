import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

function Head({ innerTitle }) {
  const title = `Covid Square: ${innerTitle}`;
  const location = useLocation();
  const canonicalUrl = `https://covid-square.com${location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <link rel='canonical' href={canonicalUrl} />
    </Helmet>
  );
}

export default Head;
