import React, { useRef } from "react";
import WeatherElement from "./WeatherElement";
import LineTo from "react-lineto";
import ScrollContainer from "react-indiana-drag-scroll";
import { data } from "../data/data.js";

const WeatherContent = () => {
  const container = useRef(null);
  const btnLeft = useRef();
  const btnRight = useRef();
  const tempLine = [];
  const pressLine = [];

  const weatherElement = data.map(item => {
    return <WeatherElement key={item.id} {...item} />;
  });

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
        borderWidth={2}
        borderColor="#000"
        delay={true}
        within="scroll_container"
      />
    );
  }

  const handleShowButtons = () => {
    const scrollContainer = container.current.getElement();

    if (scrollContainer.scrollLeft === 0) {
      btnRight.current.style.display = "block";
    } else if (
      scrollContainer.scrollWidth - scrollContainer.scrollLeft ===
      scrollContainer.clientWidth
    ) {
      btnLeft.current.style.display = "block";
    } else {
      btnLeft.current.style.display = "block";
      btnRight.current.style.display = "block";
    }
  };

  const handleHideButtons = () => {
    btnLeft.current.style.display = "none";
    btnRight.current.style.display = "none";
  };

  const handleShowLeftBtn = () => {
    const scrollContainer = container.current.getElement();

    if (scrollContainer.scrollLeft >= 100) {
      btnLeft.current.style.display = "block";
    } else {
      btnLeft.current.style.display = "none";
    }

    if (
      scrollContainer.scrollWidth - scrollContainer.scrollLeft ===
      scrollContainer.clientWidth
    ) {
      btnRight.current.style.display = "none";
    } else {
      btnRight.current.style.display = "block";
    }
  };

  const handleScrollStepLeft = () => {
    container.current.getElement().scrollBy({
      left: -100,
      behavior: "smooth"
    });
  };

  const handleScrollStepRight = () => {
    container.current.getElement().scrollBy({
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
        ref={btnLeft}
        onClick={handleScrollStepLeft}
      ></div>
      <div
        id="btnRight"
        className="weather_content__scrollBtnRight"
        ref={btnRight}
        onClick={handleScrollStepRight}
      ></div>
    </div>
  );
};

export default WeatherContent;
