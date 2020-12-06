import React from 'react';
import Head from '../components/Head.js';
import CountrySelect from '../components/CountrySelect.js';
import ExternalLink from '../components/ExternalLink.js';
import './Home.css';
import logo from '../logo.svg';
import CountryList from '../components/CountryList.js';

const POPULAR_COUNTRIES = [
  'USA',
  'GBR',
  'PRT',
  'ESP',
  'FRA',
  'ITA',
  'CHN',
  'IND',
  'BRA',
  'RUS',
];

function Home() {
  return (
    <div className='App Home'>
      <Head />

      <header className='Home-header'>
        <div className='Home-logo'>
          <img src={logo} alt='Covid Square Logo' width='80px' height='80px' />
        </div>
        <div className='Home-title'>
          <h1>Covid Square</h1>
          <p className='Home-subtitle'>
            Compare Covid cases and deaths to your country's total population.
          </p>
        </div>
      </header>

      <main>
        <h2>Please select a country below:</h2>
        <CountrySelect />

        <div className='Home-countryListSection'>
          <h2>Or pick one of these:</h2>
          <CountryList countryCodes={POPULAR_COUNTRIES} />
        </div>

        <section className='Home-about'>
          <h2>About</h2>

          <p>
            Covid Square was built by me,{' '}
            <ExternalLink href='https://pedrogaspar.com' newTab={false}>
              Pedro Gaspar
            </ExternalLink>
            , using React and data from{' '}
            <ExternalLink href='https://disease.sh'>disease.sh</ExternalLink>.
            The code is available{' '}
            <ExternalLink href='https://github.com/pgaspar/covid-square'>
              on Github
            </ExternalLink>
            .
          </p>
          <p>
            The project was inspired by a{' '}
            <ExternalLink href='https://www.reddit.com/r/dataisbeautiful/comments/ia4waq/oc_covid_cases_and_deaths_in_the_us_as_a/'>
              post from u/data-artist
            </ExternalLink>{' '}
            on Reddit.
          </p>

          <p>
            Special thanks to the folks at{' '}
            <ExternalLink href='http://study-jams.github.io/'>
              Study Jam Vienna
            </ExternalLink>{' '}
            for their great suggestions and to{' '}
            <ExternalLink href='https://jlbribeiro.com/'>
              @jlbribeiro
            </ExternalLink>{' '}
            for his help in my understanding of the basics of PWAs 🙌
          </p>
        </section>
      </main>
    </div>
  );
}

export default Home;
