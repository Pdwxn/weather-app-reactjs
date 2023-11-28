import React from "react";
import "./description.css";

function Description(data) {
  return (
    <div className="desc">
      {/* {data.name !== undefined && ( */}
      <footer className="info">
        <section className="feels">
          <h3>24°c</h3>
          <h4>Feels like</h4>
        </section>
        <section className="humidity">
          <h3>50%</h3>
          <h4>Humidity</h4>
        </section>
        <section className="wind">
          <h3> 20Km/h</h3>
          <h4>Winds</h4>
        </section>
      </footer>
      {/* )} */}
    </div>
  );
}

export default Description;
