import React from "react";
import "./temperature.css";

function Temperature({ data }) {
  return (
    <div>
      <div className="container_temperature">
        <header className="top">
          <section className="location">
            {data.sys ? (
              <span>
                <span>{data.name}, </span>
                <span className="country">{data.sys.country}</span>
              </span>
            ) : null}
          </section>
          <section className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°c</h1> : null}
          </section>
          <section className="description">
            {data.weather ? <h3>{data.weather[0].main}</h3> : null}
          </section>
        </header>
      </div>

      <div className="container_data">
        {data.name !== undefined && (
          <footer className="bottom">
            <section className="feels">
              {data.main ? <h3>{data.main.feels_like.toFixed()}°c</h3> : null}
              <h4>Feels like</h4>
            </section>
            <section className="humidity">
              {data.main ? (
                <h3 className="bold">{data.main.humidity}%</h3>
              ) : null}
              <h4>Humidity</h4>
            </section>
            <section className="wind">
              {data.wind ? (
                <h3 className="bold">{data.wind.speed.toFixed()}Km/h</h3>
              ) : null}
              <h4>Winds</h4>
            </section>
          </footer>
        )}
      </div>
    </div>
  );
}

export default Temperature;
