import React, { Component } from "react";
import SmartMeterItem from "./smartMeterItem";
import { searchSm } from "../actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ErrorBox from "../../../shared/errorHandlerComponent/errorHandler";
class SmartMeterContainer extends Component {
  state = {
    redirectTo: false
  };
  redirectToNonDeployedSM = () => {
    this.setState({
      redirectTo: true
    });
  };
  render() {
    const { regionId, error } = this.props;
    if (this.state.redirectTo === true) {
      return <Redirect to={`/admin/deployment/${regionId} `} />;
    }

    return (
      <div className="region-sm-list">
        <div className="search-add-sm">
          <input
            placeholder="search.."
            onChange={e => this.props.searchSm(e.target.value)}
          />
          <input
            type="button"
            value="+ add"
            className="user-dash-wallet-exchange"
            onClick={this.redirectToNonDeployedSM}
          />{" "}
        </div>
        <div className="list-of-sm">
          {this.props.regionSmData && this.props.regionSmData.length > 0 ? (
            this.props.regionSmData
              .filter(el =>
                el._id
                  .toString()
                  .toLowerCase()
                  .includes(this.props.searchInput.toLowerCase())
              )
              .map(el => <SmartMeterItem deployedSM={el} />)
          ) : (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around"
              }}
            >
              <ErrorBox
                color="warning"
                err="this region has non deployed SM"
                vibrate="pulsate-fwd"
                icon="fas fa-exclamation-triangle"
              />{" "}
            </div>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    searchInput: state.searchInput,
    regionId: state.mapIcon.region._id
  };
};
const mapDispatchToProps = dispatch => {
  return {
    searchSm: x => dispatch(searchSm(x))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SmartMeterContainer);
