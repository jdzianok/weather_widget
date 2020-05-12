import React, { useState, useEffect } from "react";
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
      />
    );
  }
  const weatherElement = data.map((item, index) => {
    return <WeatherElement key={index} {...item} index={index} />;
  });

  const size = useWindowSize();

  useEffect(() => {}, size);

  return (
    <div className="weather_content">
      {weatherElement}
      {tempLine.map(item => item)}
      {pressLine.map(item => item)}
    </div>
  );
};

function useWindowSize() {
  const isClient = typeof window === "object";

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

export default WeatherContent;
