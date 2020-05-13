import React from "react";
import WeatherElement from "./WeatherElement";
import LineTo from "react-lineto";
import { data } from "../data/data.js";

const WeatherContent = () => {
  const tempLine = [];
  const pressLine = [];
  for (let i = 0; i < data.length - 1; i++) {
    tempLine.push(
      <LineTo
        key={i}
        from={`temp-dot-${i}`}
        to={`temp-dot-${i + 1}`}
        borderWidth={1}
        borderColor="#f9d348"
        delay={true}
        within="weather_content"
        zIndex={-10}
      />
    );
  }
  for (let i = 0; i < data.length - 1; i++) {
    pressLine.push(
      <LineTo
        key={i}
        from={`press-dot-${i}`}
        to={`press-dot-${i + 1}`}
        borderWidth={1}
        borderColor="#000"
        delay={true}
        within="weather_content"
      />
    );
  }
  const weatherElement = data.map((item, index) => {
    return <WeatherElement key={index} {...item} index={index} />;
  });

  return (
    <div className="weather_content">
      {weatherElement}
      {tempLine.map(item => item)}
      {pressLine.map(item => item)}
    </div>
  );
};

export default WeatherContent;
