import React from "react";

const WeatherElement = props => {
  const {
    day,
    hour,
    image,
    temp,
    rain,
    windDir,
    wind,
    pressure,
    index
  } = props;

  return (
    <div className="weather_column">
      <div className="weather_column__day">{day ? day : null}</div>
      <div className="weather_column__hour">{hour}</div>
      <div className="weather_column__forecast">
        {/* <img src={image} alt={image} /> */}
      </div>
      <div className="weather_column__temperature">
        <div className="content">
          <p className="value">{temp}&#176;</p>
          <span className={`temp-dot-${index}`}></span>
        </div>
      </div>
      <div className="weather_column__precipitation">
        {rain === 0 ? null : (
          <>
            <p>{rain} mm</p>
            <div style={{ height: `${rain * 10}px` }}></div>
          </>
        )}
      </div>
      <div className="weather_column__wind_dir">
        {/* <img className={`${arrow}`} src={arrow} alt="arrow" /> */}
        <p>{windDir}</p>
      </div>
      <div className="weather_column__wind_speed">
        <p>{wind[0]}</p>
        <p>{wind[1]} km/h</p>
      </div>
      <div className="weather_column__pressure">
        <div className="content">
          <p className="value">{pressure} hPa</p>
          <span className={`press-dot-${index}`}></span>
        </div>
      </div>
    </div>
  );
};

export default WeatherElement;
