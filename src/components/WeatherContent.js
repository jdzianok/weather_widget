import React, { useRef } from "react";
import WeatherElement from "./WeatherElement";
import LineTo from "react-lineto";
import ScrollContainer from "react-indiana-drag-scroll";
import { data } from "../data/data.js";

const WeatherContent = () => {
  const container = useRef(null);
  const tempLine = [];
  const pressLine = [];

  for (let i = 0; i < data.length - 1; i++) {
    tempLine.push(
      <LineTo
        key={i}
        from={`temp-dot-${i}`}
        to={`temp-dot-${i + 1}`}
        borderWidth={2}
        borderColor="#f9d348"
        delay={true}
        within="scroll_container"
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
        within="scroll_container"
      />
    );
  }
  const weatherElement = data.map((item, index) => {
    return <WeatherElement key={index} {...item} index={index} />;
  });

  const handleShowButtons = () => {
    const btnLeft = document.getElementById("btnLeft");
    const btnRight = document.getElementById("btnRight");
    const scrollContainer = document.querySelector(".scroll_container");

    if (scrollContainer.scrollLeft === 0) {
      btnRight.style.display = "block";
    } else if (
      scrollContainer.scrollWidth - scrollContainer.scrollLeft ===
      scrollContainer.clientWidth
    ) {
      btnLeft.style.display = "block";
    } else {
      btnLeft.style.display = "block";
      btnRight.style.display = "block";
    }
  };

  const handleHideButtons = () => {
    const btnLeft = document.getElementById("btnLeft");
    const btnRight = document.getElementById("btnRight");
    btnLeft.style.display = "none";
    btnRight.style.display = "none";
  };

  const handleShowLeftBtn = () => {
    const btnLeft = document.getElementById("btnLeft");
    const btnRight = document.getElementById("btnRight");
    const scrollContainer = document.querySelector(".scroll_container");
    if (scrollContainer.scrollLeft >= 100) {
      btnLeft.style.display = "block";
    } else {
      btnLeft.style.display = "none";
    }

    if (
      scrollContainer.scrollWidth - scrollContainer.scrollLeft ===
      scrollContainer.clientWidth
    ) {
      btnRight.style.display = "none";
    } else {
      btnRight.style.display = "block";
    }
  };

  const handleScrollStepLeft = () => {
    const scrollContainer = document.querySelector(".scroll_container");
    scrollContainer.scrollBy({
      left: -100,
      behavior: "smooth"
    });
  };
  const handleScrollStepRight = () => {
    const scrollContainer = document.querySelector(".scroll_container");
    scrollContainer.scrollBy({
      left: 100,
      behavior: "smooth"
    });
  };

  return (
    <div
      className="weather_content"
      onMouseEnter={handleShowButtons}
      onMouseLeave={handleHideButtons}
      onScroll={handleShowLeftBtn}
    >
      <ScrollContainer
        className="scroll_container"
        ref={container}
        hideScrollbars={false}
        onEndScroll={scrollLeft => {
          if (scrollLeft % 100 < 50) {
            const offset = scrollLeft - (scrollLeft % 100);

            container.current.getElement().scrollTo({
              top: 0,
              left: offset,
              behavior: "smooth"
            });
          } else {
            const offset = scrollLeft + (100 - (scrollLeft % 100));

            container.current.getElement().scrollTo({
              top: 0,
              left: offset,
              behavior: "smooth"
            });
          }
        }}
      >
        {weatherElement}
        {tempLine.map(item => item)}
        {pressLine.map(item => item)}
      </ScrollContainer>
      <div
        id="btnLeft"
        className="weather_content__scrollBtnLeft"
        onClick={handleScrollStepLeft}
      ></div>
      <div
        id="btnRight"
        className="weather_content__scrollBtnRight"
        onClick={handleScrollStepRight}
      ></div>
    </div>
  );
};

export default WeatherContent;
