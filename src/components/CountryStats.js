import React from 'react';
import './CountryStats.css';

function CountryStats({
  todayCases,
  todayDeaths,
  todayRecovered,
  cases,
  deaths,
  recovered,
  active,
  critical,
  population,
  tests,
  casesPerOneMillion,
  deathsPerOneMillion,
  testsPerOneMillion,
  activePerOneMillion,
  recoveredPerOneMillion,
  criticalPerOneMillion,
  oneCasePerPeople,
  oneDeathPerPeople,
  oneTestPerPeople,
}) {
  return (
    <section className='CountryStats'>
      <h2>Today's Numbers</h2>

      <table>
        <tbody>
          <tr>
            <th>Cases</th>
            <td>{todayCases && todayCases.toLocaleString()}</td>
          </tr>
          <tr>
            <th>Deaths</th>
            <td>{todayDeaths && todayDeaths.toLocaleString()}</td>
          </tr>
          <tr>
            <th>Recovered</th>
            <td>{todayRecovered && todayRecovered.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>

      <h2>Total Stats</h2>

      <table>
        <tbody>
          <tr>
            <th>Cases</th>
            <td>{cases && cases.toLocaleString()}</td>
          </tr>
          <tr>
            <th>Deaths</th>
            <td>{deaths && deaths.toLocaleString()}</td>
          </tr>
          <tr>
            <th>Critical</th>
            <td>{critical && critical.toLocaleString()}</td>
          </tr>
          <tr>
            <th>Active</th>
            <td>{active && active.toLocaleString()}</td>
          </tr>
          <tr>
            <th>Recovered</th>
            <td>{recovered && recovered.toLocaleString()}</td>
          </tr>
          <tr>
            <th>Tests</th>
            <td>{tests && tests.toLocaleString()}</td>
          </tr>
          <tr>
            <th>Population</th>
            <td>{population && population.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>

      <h2>"X" Per One Million</h2>

      <table>
        <tbody>
          <tr>
            <th>Cases</th>
            <td>{casesPerOneMillion && casesPerOneMillion.toLocaleString()}</td>
          </tr>
          <tr>
            <th>Deaths</th>
            <td>
              {deathsPerOneMillion && deathsPerOneMillion.toLocaleString()}
            </td>
          </tr>
          <tr>
            <th>Critical</th>
            <td>
              {criticalPerOneMillion && criticalPerOneMillion.toLocaleString()}
            </td>
          </tr>
          <tr>
            <th>Active</th>
            <td>
              {activePerOneMillion && activePerOneMillion.toLocaleString()}
            </td>
          </tr>
          <tr>
            <th>Recovered</th>
            <td>
              {recoveredPerOneMillion &&
                recoveredPerOneMillion.toLocaleString()}
            </td>
          </tr>
          <tr>
            <th>Tests</th>
            <td>{testsPerOneMillion && testsPerOneMillion.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>

      <h2>One "X" Per "Y" People</h2>

      <table>
        <tbody>
          <tr>
            <th>One case per</th>
            <td>
              {oneCasePerPeople &&
                `${oneCasePerPeople.toLocaleString()} people`}
            </td>
          </tr>
          <tr>
            <th>One death per</th>
            <td>
              {oneDeathPerPeople &&
                `${oneDeathPerPeople.toLocaleString()} people`}
            </td>
          </tr>
          <tr>
            <th>One test per</th>
            <td>
              {oneTestPerPeople &&
                `${oneTestPerPeople.toLocaleString()} people`}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default CountryStats;
