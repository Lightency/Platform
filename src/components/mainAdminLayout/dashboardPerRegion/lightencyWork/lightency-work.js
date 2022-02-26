import React from "react";
import Layer1 from "./Layer 13.png";
import Layer2 from "./Layer 10.png";
import Layer3 from "./Layer 11.png";
import Layer4 from "./Layer 9.png";
import OnOff from "../onOff/onOff";

import "./lightency.css";
import Circle from "./circle";
export default function LightencyWork() {
  return (
    <div className="cc">
      <div className="first-part-image">
        <img src={Layer1} alt="" className="first-image" />
        <img src={Layer1} alt="" className="first-image-copy" />
        <div style={{ position: "absolute", bottom: "-8px", left: "20%" }}>
          <OnOff />
        </div>
        <div className="two-virtica-line-container">
          <div />
          <div>
            <img src={Layer2} alt="" />
          </div>
          <div />
          <div>
            {" "}
            <img src={Layer3} alt="" />
          </div>
        </div>
        <img src={Layer4} alt="" className="second-image" />
        <div className="two-virtica-line-container-2">
          <div />
          <div>
            <img src={Layer2} alt="" />
          </div>
          <div />
          <div>
            {" "}
            <img src={Layer3} alt="" />
          </div>
        </div>
        <Circle />
      </div>
      <div className="cc-2">
        <div className="battery-bottom">
          <div className="battery-bottom-item">
            <div className="battery-bottom-border">
              <div />
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
