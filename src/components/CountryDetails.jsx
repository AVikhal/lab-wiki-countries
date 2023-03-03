import { useState } from 'react';
import { Params, useParams } from 'react-router-dom';

function CountryDetails(props) {
  // const [countryDetails, SetCountryDetails] = useState ([])

  // const countryArr = [...props]

  const params = useParams();
  const { country } = params;

  const { countries } = props;
  console.log(countries[0]);

  return (
    <div className="col-7">
      {countries.map((eachCountry) => {
        return (
          <div key = {eachCountry.alpha3Code}>
            {country === eachCountry.alpha3Code ? (
              <div >
                <h1>{eachCountry.name.common}</h1>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`} />
                <table className="table">
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td style={{ width: '30%' }}>Capital</td>
                      <td>{eachCountry.capital}</td>
                    </tr>
                    <tr>
                      <td>Area</td>
                      <td>
                        {eachCountry.area} km
                        <sup>2</sup>
                      </td>
                    </tr>
                    <tr>
                      <td>Borders</td>
                      <td>
                        <ul>
                          {eachCountry.borders.map((eachBorder)=>{
                           return(
                            <li key={eachBorder}>
                            <a href={`/country-details/${eachBorder}`}>{eachBorder}</a>
                          </li>
                           )
                          })}
                      
              
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default CountryDetails;
