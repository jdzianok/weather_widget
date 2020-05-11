import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
// import './App.css';

import LineTo from "react-lineto";

const data = [
  {
    godzina: "20:00",
    temperatura: 60,
    opaday: 20
  },
  {
    godzina: "20:00",
    temperatura: 60,
    opaday: 20
  },
  {
    godzina: "20:00",
    temperatura: 60,
    opaday: 20
  }
];

function Column(props) {
  return (
    <div
      style={{
        width: "300px",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        border: "3px dashed tomato"
      }}
    >
      <div style={{ flex: 1 }}>godzina: {props.godzina}</div>
      <div style={{ flex: 1, position: "relative" }}>
        temperatura: {props.temperatura}
        <div
          className={`temp-${props.index}`}
          style={{
            position: "absolute",
            borderRadius: "50%",
            width: "15px",
            height: "15px",
            border: "2px solid green",
            // backgroundColor: "green",
            left: "50%",
            top: `${props.temperatura}%`,
            transform: "translate(-50%, -50%)"
          }}
        ></div>
      </div>
      <div style={{ flex: 1 }}>opady: {props.opaday}</div>
    </div>
  );
}

function App() {
  const lineTo = [];

  for (let i = 0; i < data.length - 1; i++) {
    lineTo.push(
      <LineTo
        key={i}
        from={`temp-${i}`}
        to={`temp-${i + 1}`}
        borderWidth={1}
        borderColor="green"
        delay={true}
        fromAnchor="99%"
        toAnchor="2%"
      />
    );
  }

  const size = useWindowSize();

  useEffect(() => {}, size);

  return (
    <div style={{ display: "flex" }}>
      {data.map((item, index) => {
        return <Column key={index} {...item} index={index} />;
      })}
      {lineTo.map(item => item)}
    </div>
  );

  // return (
  //   <div>
  //     <div
  //       className="A"
  //       style={{ width: "200px", height: "200px", border: "1px solid green" }}
  //     >
  //       Element A
  //     </div>
  //     <div
  //       className="B"
  //       style={{
  //         width: "200px",
  //         height: "200px",
  //         border: "1px solid green",
  //         position: "absolute",
  //         top: 300,
  //         left: 500,
  //       }}
  //     >
  //       Element B
  //     </div>
  //     <LineTo
  //       delay={true}
  //       from="A"
  //       to="B"
  //       borderWidth={3}
  //       borderColor="red"
  //       fromAnchor="middle right"
  //       toAnchor="middle left"
  //     />
  //   </div>
  // );
}

// Hook
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

export default App;
