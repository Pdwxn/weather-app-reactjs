import React from "react";
import "./header.css";
import SearchBar from "../Search Bar/SearchBar";

function Header({ location, setLocation, searchLocation }) {
  return (
    <div>
      <header className="header">
        <div className="rght-side">
          <img className="logo" src="logo" alt="logo" />
          <h1>WeatherApp</h1>
        </div>
        <div>
          <SearchBar
            location={location}
            setLocation={setLocation}
            searchLocation={searchLocation}
          />
        </div>
      </header>
    </div>
  );
}

export default Header;
