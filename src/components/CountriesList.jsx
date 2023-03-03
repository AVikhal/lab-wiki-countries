import { Link } from 'react-router-dom';

function CountriesList(props) {
  const { countries } = props;
  console.log(countries);

  return (


    <div className="col-5" style= {{maxHeight: "90vh", overflow: "scroll"}}>
      <div className="list-group">
        <h2>All Countries</h2>
        {countries.map((eachcountry) => {

          return (
            <h3 key={eachcountry.alpha3Code}>
              <Link to={`/country-details/${eachcountry.alpha3Code}`}>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachcountry.alpha2Code.toLowerCase()}.png`} alt="" />
                <h4>{eachcountry.name.common}</h4>
              </Link>
            </h3>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
