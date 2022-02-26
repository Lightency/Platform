import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Weather from "../../weather/weather";
import "./history.css";
import { getElectricityHistory, getOneRegion } from "../actions";
import SpinnerRadar from "../../../shared/spinnerRadar/spinnerRadar";
class History extends Component {
  state = {};
  componentDidMount() {
    const { getHistory, getRegion } = this.props;
    getRegion(
      `http://35.246.92.221:5001/api/region/deployed/${
        this.props.match.params.id
      }`
    );
    getHistory(
      `http://35.246.92.221:5001/api/region/history/${
        this.props.match.params.id
      }`
    );
  }
  render() {
    const { history, region, loding } = this.props;
    return (
      <div className="col-12">
        <Weather regionData={region} />
        <hr className="chart-line" />

        <Fragment>
          {loding ? (
            <SpinnerRadar />
          ) : (
            <Fragment>
              <div className="container">
                <div className="row region-toal-sm-container">
                  <div className="col-lg-6 region-total-sm-1">
                    <p>
                      <i className="fa fa-map-marked-alt" />
                      Region name:{" "}
                      <span style={{ color: "white" }}>
                        {region && region.name}
                      </span>
                    </p>
                  </div>
                  <div className="col-lg-6 region-total-sm-2">
                    <p>
                      <i className="fa fa-list" /> History array length:{" "}
                      <span style={{ color: "white" }}>
                        {history &&
                          history.histories &&
                          history.histories.length}{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="container" style={{ marginTop: "30px" }}>
                <div className="row">
                  <div className="col-12" />
                  <div className="table-responsive ">
                    <table
                      className="table table-bordered"
                      style={{ color: "white" }}
                    >
                      <thead>
                        <tr>
                          <th scope="col">Prod</th>
                          <th scope="col">Con</th>
                          <th scope="col">tmstp</th>
                          <th scope="col">Solar prod</th>
                          <th scope="col">Solar Con</th>
                          <th scope="col">Solarprod surplus</th>

                          <th scope="col">surplus</th>
                          <th scope="col">battrySurplusCon</th>
                          <th scope="col"> TknElecBalance</th>
                          <th scope="col">TknElecBalanceCon</th>
                          <th>Tkn</th>
                          <th>tp</th>
                          <th>tc</th>
                        </tr>
                      </thead>
                      <tbody>
                        {history &&
                          history.histories &&
                          history.histories.map(historyT2 => (
                            <tr>
                              <td>{historyT2.prod}</td>
                              <td>{historyT2.con}</td>
                              <td>{historyT2.timeSpan.toString()}</td>
                              <td>{historyT2.solarProduction}</td>
                              <td>{historyT2.solarConsumption}</td>
                              <td>{historyT2.solarProductionSurplus}</td>{" "}
                              <td>{historyT2.surplus}</td>
                              <td>{historyT2.battryAndSurplusConsumption}</td>
                              <td>
                                {historyT2.remainingTokenElectricityBalance}
                              </td>{" "}
                              <td>
                                {historyT2.tokenElectricityBalanceConsumed}
                              </td>
                              <td>{historyT2.token}</td>
                              <td>{historyT2.totalProd}</td>
                              <td>{historyT2.totalCon}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Fragment>
          )}
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    history: state.mapIcon.history,
    loding: state.mapIcon.isLoading,
    region: state.mapIcon.region
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHistory: url => dispatch(getElectricityHistory(url)),
    getRegion: url => dispatch(getOneRegion(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
