import React from 'react';

function Head({ href, children, newTab = true }) {
  const newTabProps = newTab ? { target: '_blank', rel: 'noreferrer' } : {};

  return (
    <a href={href} {...newTabProps}>
      {children}
    </a>
  );
}

export default Head;
