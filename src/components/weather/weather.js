/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import "./weather.css";
import humidity from "./humidity.png";
import { connect } from "react-redux";
import { getRegionWeather } from "../../components/mainAdminLayout/actions";
import SimpleSpinner from "../../shared/simpleSpinner/simpleSpinner";

class Weather extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.region.latitude !== prevProps.region.latitude) {
      const { latitude, longitude } = this.props.region;
      this.props.getWeather(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=95fd50574e0b48f82926a4ece980ec67`
      );
    }
  }

  render() {
    const { region, weather, isLoading } = this.props;
    return (
      <div className="user-dash-weather">
        <div className="weather-user">
          <div className="weather-info-grid-container">
            <div className="weather-infoo">
              <div
                className="weather-info-titles-user"
                style={{ textAlign: "left" }}
              >
                <span className="weather-title">LOCATION</span>
                <span className="weather-title">SENSORS</span>
                <span className="weather-title">NETWORK</span>
                <span className="weather-title">STATUS</span>
              </div>

              <div
                className="weather-info-data-user"
                style={{ textAlign: "left" }}
              >
                <span className="weather-title-data">
                  {" "}
                  {region && region.name}
                </span>
                <span className="weather-title-data">Operational</span>
                <span className="weather-title-data">
                  {region && region.comunicationStatus}
                </span>
                <span className="weather-title-data">
                  {region && region.status}
                </span>
              </div>
            </div>
            <div className="micro-grid">
              <input type="button" value="microgrid status" />
            </div>
          </div>
          <div className="weather-user-data">
            {/************************HUMIDITY************************** */}
            {isLoading ? (
              <SimpleSpinner border={"4px solid #ffdd00"} />
            ) : (
              <div className="weather-wind">
                <div className="weather-comp-logo">
                  {" "}
                  <img
                    src={humidity}
                    alt="humedity-user"
                    style={{
                      width: "50px",
                      height: "50px",
                      marginRight: "5px"
                    }}
                  />
                </div>
                <div className="weather-comp-data">
                  <div className="weather-comp-data-num">
                    <span className="weather-comp-data-numeric">
                      {(weather.main && weather.main.humidity) || 0}{" "}
                    </span>
                    <span className="weather-comp-data-unit-user">%</span>
                  </div>
                  <span className="weather-comp-title-user">HUMIDITY</span>
                </div>
              </div>
            )}
            {/************************HUMIDITY************************** */}
            {/************************wind************************** */}
            {isLoading ? (
              <SimpleSpinner border={"4px solid #ffdd00"} />
            ) : (
              <div className="weather-wind">
                <div className="weather-comp-logo">
                  {" "}
                  <img
                    className="humedity-user"
                    src="https://i.imgur.com/YDJ9Dji.png"
                    alt="humedity-user"
                  />
                </div>
                <div className="weather-comp-data">
                  <div className="weather-comp-data-num">
                    <span className="weather-comp-data-numeric">
                      {(weather.wind && weather.wind.speed) || 0}
                    </span>
                    <span className="weather-comp-data-unit-user">m/s</span>
                  </div>
                  <span className="weather-comp-title-user">WIND</span>
                </div>
              </div>
            )}

            {/************************END WIND************************** */}
            {/************************TEMP************************** */}

            {isLoading ? (
              <SimpleSpinner border={"4px solid #ffdd00"} />
            ) : (
              <div className="weather-temp">
                <div className="weather-comp-logo">
                  <img
                    className="humedity-user"
                    src="https://i.imgur.com/mHjgAXm.png"
                    alt="humedity-user"
                  />
                </div>
                <div className="weather-comp-data">
                  <div className="weather-comp-data-num">
                    <span className="weather-comp-data-numeric">
                      {(weather.main &&
                        (parseFloat(weather.main.temp - 32) * (5 / 9)).toFixed(
                          2
                        )) ||
                        0}
                    </span>
                    <span className="weather-comp-data-unit-user">°C</span>
                  </div>
                  <span className="weather-comp-title-user">SUNNY</span>
                </div>
              </div>
            )}
            {/************************HUMIDITY************************** */}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    weather: state.weather.weather,
    region: state.mapIcon.region,
    isLoading: state.weather.isLoading,
    error: state.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getWeather: url => dispatch(getRegionWeather(url))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather);
