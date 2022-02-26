import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./deploymentDashboard.css";
import { Redirect } from "react-router-dom";
import SpinnerRadar from "../../../../shared/spinnerRadar/spinnerRadar";
import Weather from "../../../weather/weather";
import ErrorBox from "../../../../shared/errorHandlerComponent/errorHandler";
import { fetchNotDeployedSm, reconRegion, clearErrors } from "../../actions";
export class DeploymentDashboard extends Component {
  state = {
    deployClicked: false,
    SmId: 0
  };
  componentDidMount() {
    const { fetchNotDeployed, clearError } = this.props;
    clearError();
    fetchNotDeployed(
      `http://35.246.92.221:5001/api/region/notdeployed/${
        this.props.match.params.region
      }`
    );
  }
  ReconSmarts = () => {
    const { reconNotDeployed } = this.props;

    reconNotDeployed(
      `http://35.246.92.221:5001/api/region/recon/${
        this.props.match.params.region
      }`
    );
  };
  deploySM = x => {
    this.setState({
      deployClicked: true,
      SmId: x
    });
  };
  render() {
    if (this.state.deployClicked) {
      return <Redirect to={`/admin/deploymentConsole/${this.state.SmId}`} />;
    }
    const { notDeployedSM, isLoading, error } = this.props;
    const x = notDeployedSM.region;

    return (
      <div className="col-12" style={{ height: "100vh" }}>
        <Weather regionData={notDeployedSM.region} />
        <hr className="chart-line" />
        {isLoading ? (
          <SpinnerRadar />
        ) : (
          <Fragment>
            <div className="container">
              <div className="row region-toal-sm-container">
                <div className="col-lg-6 region-total-sm-1">
                  <p>
                    <i class="fas fa-map-marked-alt" /> Region :{" "}
                    <span style={{ color: "white" }}>{x && x.name}</span>
                  </p>
                </div>
                <div className="col-lg-6 region-total-sm-2">
                  <p>
                    <i class="fas fa-list" /> Total of not deployed SM :{" "}
                    <span style={{ color: "white" }}>
                      {x && x.smartMeters && x.smartMeters.length}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="container" style={{ marginTop: "30px" }}>
              <div className="row">
                <div className="col-12" />
                <div class="table-responsive ">
                  <table
                    class="table table-bordered"
                    style={{ color: "white" }}
                  >
                    <thead>
                      <tr>
                        <th scope="col">Smartmeter ID</th>
                        <th scope="col">IP</th>
                        <th scope="col">deploy</th>
                      </tr>
                    </thead>
                    <tbody>
                      {x &&
                        x.smartMeters &&
                        x.smartMeters.map(el => (
                          <tr>
                            <td>{el._id}</td>
                            <td>{el.mqttopic}</td>
                            <td>
                              <span
                                className="user-dash-wallet-exchange deploy-btn"
                                onClick={() => this.deploySM(el._id)}
                              >
                                <i class="fas fa-share-square" />
                                Deploy
                              </span>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                <div className="recon-btn-container">
                  <span
                    className="user-dash-wallet-exchange "
                    onClick={this.ReconSmarts}
                    style={{ height: "50px" }}
                  >
                    <i class="fas fa-sync" /> Recon
                  </span>{" "}
                  {error && (
                    <ErrorBox
                      color="danger"
                      err={error.err}
                      vibrate="pulsate-fwd"
                      icon="fas fa-exclamation-triangle"
                    />
                  )}
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notDeployedSM: state.mapIcon.notDeployed,
  regionData: state.mapIcon.region,
  isLoading: state.mapIcon.isLoading,
  error: state.error
});

const mapDispatchToProps = dispatch => {
  return {
    fetchNotDeployed: region => dispatch(fetchNotDeployedSm(region)),
    reconNotDeployed: region => dispatch(reconRegion(region)),
    clearError: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeploymentDashboard);
