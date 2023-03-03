import logo from './logo.svg';
import './App.css';
import countries from './countries.json';
import NavBar from './components/NavBar';
import { Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

const countriesArr = countries;

function App() {
  // const [ countries, setCountries] = useState (countries)

  //  console.log(countries)

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />

          <Routes>
            <Route
              path="/country-details/:country"
              element={<CountryDetails countries={countries}/>}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
