import React from "react";
import { Line } from "react-chartjs-2";
import CountUp from "react-countup";
import "./reginChart.css";

//getChartData so we need class first
function RegionChart({ regionData, data, chartTitle, date }) {
  console.log(regionData, data, date, "WTF55");
  return (
    <div className="chart-container">
      <div className="real-data">
        <div className="real-data-title">
          <span>ENERGY</span>

          <span>{chartTitle.toUpperCase()}</span>
        </div>
        <div className="real-data-metric">
          <span className="real-data-data">
            {regionData && regionData.toFixed(3)}
          </span>
          <span className="real-data-unit">Kw</span>
        </div>
      </div>
      <Line
        data={{
          labels: date,
          legend: {
            display: false
          },
          datasets: [
            {
              label: "hidden",
              backgroundColor: "rgba(230, 215, 9,0.2)",
              borderColor: "rgb(230,215,9)",
              data: data,
              pointBorderColor: "transparent"
            }
          ]
        }}
        height="300px"
        width={500}
        options={{
          legend: {
            display: false
          }
        }}
      />
    </div>
  );
}
export default RegionChart;
