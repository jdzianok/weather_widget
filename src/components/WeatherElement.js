import React from "react";
import arrow from "../assets/arrow.svg";
import cloud from "../assets/cloud.svg";
import moon_cloud from "../assets/moon-cloud.svg";
import heavy_rain from "../assets/heavy-rain.svg";
import raining from "../assets/rain.svg";
import sun_cloud from "../assets/sun-cloud.svg";
import sun from "../assets/sun.svg";

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

  let picture;

  switch (image) {
    case "sun":
      picture = sun;
      break;
    case "sun_cloud":
      picture = sun_cloud;
      break;
    case "cloud":
      picture = cloud;
      break;
    case "moon_cloud":
      picture = moon_cloud;
      break;
    case "heavy_rain":
      picture = heavy_rain;
      break;
    case "rain":
      picture = raining;
      break;
    default:
      console.log(image);
  }

  const changeDot = value => {
    return value
      .toString()
      .split(".")
      .join(",");
  };

  const positionTemp = { bottom: `${temp * 5}px` };

  return (
    <div className="weather_column">
      <div className="weather_column__day">{day ? day : null}</div>
      <div className="weather_column__border_wrapper">
        <div className="weather_column__hour">{hour}</div>
        <div className="weather_column__forecast">
          <img src={picture} alt={image} />
        </div>
        <div className="weather_column__temperature">
          <div style={positionTemp} className="content">
            <p className="value">{temp}&#176;</p>
            <span className={`temp-dot-${index}`}></span>
          </div>
        </div>
        <div className="weather_column__precipitation">
          {rain === 0 ? null : (
            <>
              <p>{changeDot(rain)} mm</p>
              <div style={{ height: `${rain * 14}px` }}></div>
            </>
          )}
        </div>
        <div className="weather_column__wind_dir">
          <img className={`${arrow}`} src={arrow} alt="arrow" />
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
    </div>
  );
};

export default WeatherElement;
