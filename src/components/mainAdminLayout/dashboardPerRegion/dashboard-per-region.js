import React from "react";
import { Fragment } from "react";
import { connect } from "react-redux";
import Weather from "../../weather/weather";
import RegionChart from "./charts/regionsChart";
import SmartMeterContainer from "./smartMeterContainer";
import "./dashboardPerRegion.css";
import { getOneRegion } from "../actions";
import Battery from "./batteryStatus/batteryStatus";
import SpinnerRadar from "../../../shared/spinnerRadar/spinnerRadar";
import LightencyWork from "./lightencyWork/lightency-work";
class DashboardPerRegion extends React.Component {
  componentDidMount() {
    this.props.getOneRegion(
      `http://35.246.92.221:5001/api/region/deployed/${
        this.props.match.params.region
      }`
    );
  }
  render() {
    const { match, regionInfo, isLoading } = this.props;
    const consumptionTotal =
      regionInfo &&
      regionInfo.electrons &&
      regionInfo.electrons.map(electron => electron.con);
    const prodTotal =
      regionInfo &&
      regionInfo.electrons &&
      regionInfo.electrons.map(electron => electron.prod);
    const dateTotal =
      regionInfo &&
      regionInfo.electrons &&
      regionInfo.electrons.map(date => {
        let x = new Date(date.date);
        return `D:${x.getDate()}/H:${x.getHours()}`;
      });
    return (
      <Fragment>
        <div className="container-fluid">
          <Weather regionData={regionInfo} />
          <hr />
          {console.log(match.params.region)}
          {isLoading ? (
            <div className="row region-info-row">
              <SpinnerRadar />
            </div>
          ) : (
            <div className="row  region-info-row">
              <div className="col-lg-8 col-md-12">
                <div className="row" style={{ padding: "15px" }}>
                  <div className="col-lg-4 col-md-4">
                    <RegionChart
                      chartTitle="production"
                      regionData={regionInfo && regionInfo.production}
                      data={prodTotal}
                      date={dateTotal}
                    />
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <RegionChart
                      chartTitle="consumption"
                      regionData={regionInfo && regionInfo.consumption}
                      data={consumptionTotal}
                      date={dateTotal}
                    />
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <Battery />
                  </div>
                </div>
                <hr className="chart-break" />

                <div
                  className="col-12"
                  style={{
                    height: "500px",
                    position: "relative",
                    marginLeft: "44px"
                  }}
                >
                  <LightencyWork />
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                {/*  {regionsInfo
              .filter(el => el.region === match.params.region)
              .map(
                el =>
                  el.DeployedSM && (
                    <SmartMeterContainer regionSmData={el.DeployedSM} />
                  )
              )}*/}
                <SmartMeterContainer
                  regionSmData={
                    regionInfo.smartMeters && regionInfo.smartMeters
                  }
                />
              </div>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    regionInfo: state.mapIcon.region,
    regionName: state.regionName,
    isLoading: state.mapIcon.isLoading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getOneRegion: region => dispatch(getOneRegion(region))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPerRegion);
