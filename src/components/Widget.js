import React from "react";
import Legend from "./Legend";
import WeatherContent from "./WeatherContent";

const Widget = () => {
  return (
    <div className="widget_container">
      <Legend />
      <WeatherContent />
    </div>
  );
};

export default Widget;
