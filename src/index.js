import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as Sentry from '@sentry/react';
import { BrowserRouter as Router } from 'react-router-dom';

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn:
      'https://237992fcb9824a9b88832db09050b309@o454706.ingest.sentry.io/5445158',
  });
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
