import ReactDOM from "react-dom";

import React, { useEffect, useState, useRef } from "react";
import logo from "./logo.svg";
// import "./App.css";

import ScrollContainer from "react-indiana-drag-scroll";

function App() {
  const container = useRef(null);

  return (
    <div style={{ width: 300, height: 150 }}>
      <ScrollContainer
        ref={container}
        hideScrollbars={false}
        onEndScroll={(scrollLeft, scrollTop, scrollWidth, scrollHeight) => {
          // console.log(scrollLeft, scrollTop, scrollWidth, scrollHeight);

          if (scrollLeft % 200 < 100) {
            console.log("lewo");

            const offset = scrollLeft - (scrollLeft % 200);

            container.current.getElement().scrollTo({
              top: 0,
              left: offset,
              behavior: "smooth"
            });
          } else {
            console.log("prawo");

            const offset = scrollLeft + (200 - (scrollLeft % 200));

            container.current.getElement().scrollTo({
              top: 0,
              left: offset,
              behavior: "smooth"
            });
          }
        }}
      >
        <div style={{ display: "flex", width: 600 }}>
          <div
            style={{
              flex: "0 0 200px",
              width: 200,
              height: 150,
              backgroundColor: "orange"
            }}
          >
            1
          </div>
          <div
            style={{
              flex: "0 0 200px",
              width: 200,
              height: 150,
              backgroundColor: "tomato"
            }}
          >
            2
          </div>
          <div
            style={{
              flex: "0 0 200px",
              width: 200,
              height: 150,
              backgroundColor: "red"
            }}
          >
            3
          </div>
          <div
            style={{
              flex: "0 0 200px",
              width: 200,
              height: 150,
              backgroundColor: "yellow"
            }}
          >
            4
          </div>
        </div>
      </ScrollContainer>
    </div>
  );
}

export default App;
