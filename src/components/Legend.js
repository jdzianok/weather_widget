import React from "react";

const Legend = () => {
  return (
    <div className="legend">
      <div className="legend__item legend__item--day">
        <p>Dzień</p>
      </div>
      <div className="legend__item legend__item--hour">
        <p>Godzina</p>
      </div>
      <div className="legend__item legend__item--forecast">
        <p>Prognoza</p>
      </div>
      <div className="legend__item legend__item--temperature">
        <p>Temperatura</p>
      </div>
      <div className="legend__item legend__item--precipitation">
        <p>Opady</p>
      </div>
      <div className="legend__item legend__item--wind_dir">
        <p>Kierunek wiatru</p>
      </div>
      <div className="legend__item legend__item--wind_speed">
        <p>Prędkość wiatru</p>
      </div>
      <div className="legend__item legend__item--pressure">
        <p>Ciśnienie</p>
      </div>
    </div>
  );
};

export default Legend;
