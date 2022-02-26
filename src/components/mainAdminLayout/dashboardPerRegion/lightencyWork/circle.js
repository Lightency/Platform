import React from "react";

export default function Circle(props) {
  return (
    <div className="circle-container">
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          overflow: "hidden",
          position: "relative"
        }}
      >
        <p>
          32<span style={{ color: "gold", fontSize: "17px" }}>Kw</span>
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 171 171"
          width="171"
          height="171"
          className="middle-sun"
        >
          <g id="widget 1 copy">
            <g id="graph copy">
              <path
                id="Ellipse 17 copy 5"
                fillRule="evenodd"
                className="shp0"
                d="M169.89 86.89C169.89 133.28 132.28 170.89 85.89 170.89C39.51 170.89 1.9 133.28 1.9 86.89C1.9 86.58 1.9 86.26 1.9 85.94C2.26 85.18 20.75 46.29 39.23 46.29C57.9 46.29 85.89 85.95 85.89 85.95C85.89 85.95 113.89 125.62 132.56 125.62C151.05 125.62 169.53 86.7 169.88 85.96C169.89 86.27 169.89 86.58 169.89 86.89Z"
              />
            </g>
          </g>
          <linearGradient id="my-cool-gradient" x2="1" y2="1">
            <stop offset="0%" stop-color="#DAA520" />
            <stop offset="50%" stop-color="#DAA52005" />
            <stop offset="100%" stop-color="#8B4513" />
          </linearGradient>
        </svg>
      </div>
    </div>
  );
}
