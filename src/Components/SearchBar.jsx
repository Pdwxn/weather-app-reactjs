import React from "react";
import "./searchbar.css";

function SearchBar({ location, setLocation, searchLocation }) {
  return (
    <div>
      <input
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Search City"
        type="text"
      />
    </div>
  );
}

export default SearchBar;
