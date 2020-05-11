import React from "react";
import WeatherElement from "./WeatherElement";
import { data } from "../data/data.js";

const WeatherContent = () => {
  const weatherElement = data.map((item, index) => {
    return <WeatherElement key={index} {...item} index={index} />;
  });

  return <div className="weather_content">{weatherElement}</div>;
};

export default WeatherContent;
