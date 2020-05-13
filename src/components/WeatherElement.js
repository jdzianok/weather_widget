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
  let arrowStyle;

  // funkcja do storzenia randomowej liczby między -10 a 10, której używam do uzyskania minimalnego odchylenia przy rotacji strzałek wiatru
  const randomNumber = () => Math.floor(Math.random() * 21) - 10;

  switch (windDir) {
    case "Pd.-zach.":
      arrowStyle = {
        transform: `rotate(${-45 + randomNumber()}deg)`
      };
      break;
    case "Południowy":
      arrowStyle = {
        transform: `rotate(${-90 + randomNumber()}deg)`
      };
      break;
    case "Pd.-wsch.":
      arrowStyle = {
        transform: `rotate(${-135 + randomNumber()}deg)`
      };
      break;
    case "Pn.-zach.":
      arrowStyle = {
        transform: `rotate(${45 + randomNumber()}deg)`
      };
      break;
    case "Zachodni":
      arrowStyle = {
        transform: `rotate(${randomNumber()}deg)`
      };
      break;
    default:
      console.log("error");
  }

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

  const changeDot = value =>
    value
      .toString()
      .split(".")
      .join(",");

  const positionTemp = { bottom: `${temp * 5}px` };
  const positionPress = { bottom: `${(pressure - 1000) * 5}px` };

  return (
    <div className="weather_column">
      <div className="weather_column__day">{day ? day : null}</div>
      <div className="weather_column__border_wrapper">
        <div className="weather_column__hour">{hour}</div>
        <div className="weather_column__forecast">
          <img
            className="weather_column__forecast_image"
            src={picture}
            alt={image}
          />
        </div>
        <div className="weather_column__temperature">
          <div
            style={positionTemp}
            className="weather_column__temperature_content"
          >
            <p className="weather_column__temperature_content_value">
              {temp}&#176;
            </p>
            <span className={`temp-dot-${index}`}></span>
          </div>
        </div>
        <div className="weather_column__precipitation">
          {rain === 0 ? null : (
            <>
              <p className="weather_column__precipitation_description">
                {changeDot(rain)} mm
              </p>
              <div
                className="weather_column__precipitation_bar"
                style={{ height: `${rain * 14}px` }}
              ></div>
            </>
          )}
        </div>
        <div className="weather_column__wind_dir">
          <img
            className="weather_column__wind_dir_image"
            style={arrowStyle}
            src={arrow}
            alt="arrow"
          />
          <p className="weather_column__wind_dir_description">{windDir}</p>
        </div>
        <div className="weather_column__wind_speed">
          <p className="weather_column__wind_speed_description">{wind[0]}</p>
          <p className="weather_column__wind_speed_value">{wind[1]} km/h</p>
        </div>
        <div className="weather_column__pressure">
          <div
            style={positionPress}
            className="weather_column__pressure_content"
          >
            <p className="weather_column__pressure_value">{pressure} hPa</p>
            <span className={`press-dot-${index}`}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherElement;
