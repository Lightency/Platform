import React from "react";
import { Line } from "react-chartjs-2";
import "./reginChart.css";

export default class PricingChart extends React.Component {
  state = {
    data: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Augest",
        "September",
        "October",
        "November",
        "December"
      ],
      datasets: [
        {
          label: "pricing Sell dataset",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(186, 58, 58,0.5)",
          borderColor: "rgb(186, 58, 58)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(186, 58, 58)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(186, 58, 58,0.5)",
          pointHoverBorderColor: "rgba(186, 58, 58,0.5)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.props.data1
        },
        {
          label: "pricing buy dataset",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(68, 128, 115,0.5)",
          borderColor: "rgb(68, 128, 115)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(68, 128, 115)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(68, 128, 115,0.5)",
          pointHoverBorderColor: "rgba(68, 128, 115,0.5)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.props.data2
        }
      ]
    }
  };

  componentWillReceiveProps(nextProps) {
    console.log("ferees", nextProps.data1);
    this.setState({
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "Augest",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: "volume Sell dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(186, 58, 58,0.5)",
            borderColor: "rgb(186, 58, 58)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(186, 58, 58)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(186, 58, 58,0.5)",
            pointHoverBorderColor: "rgba(186, 58, 58,0.5)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: nextProps.data1
          },
          {
            label: "volume buy dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(68, 128, 115,0.5)",
            borderColor: "rgb(68, 128, 115)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(68, 128, 115)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(68, 128, 115,0.5)",
            pointHoverBorderColor: "rgba(68, 128, 115,0.5)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: nextProps.data2
          }
        ]
      }
    });
  }

  render() {
    console.log("******************", this.state.data);
    const { data } = this.state;
    return (
      <div className="price-chart">
        <h3 style={{ textAlign: "left" }}>Trading chart</h3>
        <Line data={data} />
      </div>
    );
  }
}
