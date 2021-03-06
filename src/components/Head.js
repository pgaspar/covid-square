import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

function Head({ innerTitle }) {
  let title = 'Covid Square';
  if (innerTitle) {
    title += `: ${innerTitle}`;
  }

  const location = useLocation();
  const canonicalUrl = `https://covid-square.com${location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta name='twitter:title' content={title} />

      <meta property='og:url' content={canonicalUrl} />
      <link rel='canonical' href={canonicalUrl} />
    </Helmet>
  );
}

export default Head;
