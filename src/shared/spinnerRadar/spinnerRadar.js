import React from "react";
import "./spinner.css";
const SpinnerRadar = () => {
  return (
    <div
      class="spinner-container"
      style={{ zIndex: "14444444444444444444444" }}
    >
      <div class="fulfilling-bouncing-circle-spinner">
        <div class="circle" />
        <div class="orbit" />
        <div id="container">
          <div class="scanner" />
          <svg
            className="pulse"
            id="pulse1"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(200 200)">
              <circle className="core" />
              <circle className="radar" />
            </g>
          </svg>
          <svg
            className="pulse"
            id="pulse2"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(200 200)">
              <circle className="core" />
              <circle className="radar" />
            </g>
          </svg>
          <svg
            className="pulse"
            id="pulse3"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(200 200)">
              <circle className="core" />
              <circle className="radar" />
            </g>
            <circle className="radar" />
          </svg>
          <svg
            className="pulse"
            id="pulse4"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(200 200)">
              <circle className="core" />
              <circle className="radar" />
            </g>
          </svg>{" "}
        </div>
      </div>
    </div>
  );
};
export default SpinnerRadar;
