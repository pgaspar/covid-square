import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactGA from 'react-ga';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize('UA-176089999-1');

  Sentry.init({
    dsn:
      'https://237992fcb9824a9b88832db09050b309@o454706.ingest.sentry.io/5445158',
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

ReactDOM.render(<App />, document.getElementById('root'));
