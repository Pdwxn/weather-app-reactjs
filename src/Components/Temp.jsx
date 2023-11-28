import React from "react";
import "./temp.css";

function Temp(data) {
  return (
    <div className="main">
      <header className="top">
        <section className="location">
          <span>
            <span>Caracas, </span>
            <span className="country">VE</span>
          </span>
        </section>
        <section>
          <h1>23°c</h1>
        </section>
        <section className="sky">
          <h3>Clouds</h3>
        </section>
      </header>
    </div>
  );
}

export default Temp;
