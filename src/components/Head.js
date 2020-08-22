import React from 'react';
import { Helmet } from 'react-helmet';

function Head({ country }) {
  const title = `Covid Square: ${country}`;
  const author = 'Pedro Gaspar';
  const description = `Cases and deaths compared to total population`;
  const publicUrl = process.env.URL || 'https://covid-square.netlify.app';

  return (
    <Helmet>
      <title>{title}</title>

      <meta name='author' content={author} />
      <meta name='description' content={description} />

      <meta property='og:url' content={publicUrl} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={`${publicUrl}/logo512.png`} />

      <link rel='canonical' href={publicUrl} />
    </Helmet>
  );
}

export default Head;
