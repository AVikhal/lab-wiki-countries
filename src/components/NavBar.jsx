import { Link, Route, Routes } from "react-router-dom"
import CountriesList from "./CountriesList"
import CountryDetails from "./CountryDetails"


function NavBar() {


  return (
    
      <nav className="navbar navbar-dark bg-primary mb-3">
       <div className="container">
       <h3>LBA -  <i>WikiCountries</i> </h3>

            {/* <Link to="/coutry-details/:country" element={<CountryDetails/>}>Country Details</Link> */}
       </div>
     
      </nav>
        
          
       
             
            
        
    
  )
}

export default NavBar