import React, { useState } from "react";
import axios from "axios";
import "./app.css";
import constants from "./utils/constants.json";
import Header from "./Components/Header";
import Temperature from "./Components/Temperature";

function App() {
  const { API_KEY, API_URL, API_UNITS } = constants;
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `${API_URL}${location}${API_UNITS}metric${API_KEY}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
  return (
    <div className="app">
      <Header
        location={location}
        setLocation={setLocation}
        searchLocation={searchLocation}
      />
      <Temperature data={data} />
    </div>
  );
}

export default App;
