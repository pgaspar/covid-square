import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactGA from 'react-ga';

if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize('UA-176089999-1');
}

ReactDOM.render(<App />, document.getElementById('root'));
