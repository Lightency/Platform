import React, { Component, Fragment } from "react";
import Maps from "./map/map";
import { connect } from "react-redux";
import { getRegions, clearErrors } from "../actions";
import RegionContainer from "./regions/region-container";

class MapRegion extends Component {
  componentDidMount() {
    this.props.getAllRegion("http://35.246.92.221:5001/api/region");
  }
  render() {
    return (
      <Fragment>
        <div className="col-lg-9 ">
          <Maps />
        </div>
        <div className="col-lg-3 ">
          <div className="region-container">
            <RegionContainer />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllRegion: url => dispatch(getRegions(url)),
    error: () => dispatch(clearErrors)
  };
};
export default connect(
  null,
  mapDispatchToProps
)(MapRegion);
