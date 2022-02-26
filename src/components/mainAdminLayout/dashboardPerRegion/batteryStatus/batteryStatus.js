import React from "react";
import "./battery.css";
class Battery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 90,
      ID: 0,
      color: "gold"
    };

    this.x = setInterval(() => {
      this.setState({
        height: this.state.height + 1
      });
    }, 1000);
  }
  render() {
    if (this.state.height === 100) {
      clearInterval(this.x);
    }
    const batteryResultStyle = {
      height: "100%",
      width: `${this.state.height}%`,
      backgroundColor:
        this.state.height < 100 ? "rgb(220, 206, 53)" : "#12ff00",
      color: "black",
      fontWeight: "bolder",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    };
    const batteryResult = {
      width: "150px",
      border:
        this.state.height < 100
          ? "3px solid rgb(220, 206, 53)"
          : "3px solid #12ff00",
      height: "45px",
      borderRadius: "7px",
      position: "relative"
    };
    const batteryPoint = {
      width: "6px",
      height: "19px",
      position: "absolute",
      backgroundColor: "black",
      top: "30%",
      right: "-9px",
      backgroundColor: this.state.height < 100 ? "rgb(220, 206, 53)" : "#12ff00"
    };
    return (
      <div className="battery-box">
        <div>
          <span className="battery-power">
            BATTERY <br />
            POWER
          </span>
          <p>
            {this.state.height}
            <span>Kw</span>
          </p>
        </div>
        <div class="battery-container" style={batteryResult}>
          <div className="battery-result" style={batteryResultStyle} />
          <div style={batteryPoint} />
        </div>
        <div>
          <p>
            0<span>Kw</span>
          </p>
          <p>
            100<span>Kw</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Battery;
