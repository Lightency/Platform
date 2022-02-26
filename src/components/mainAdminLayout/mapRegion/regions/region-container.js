import React, { Fragment } from "react";
import RegionItem from "./region-item";
import AddRegion from "../addRegion/addRegin";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import SpinnerRadar from "../../../../shared/spinnerRadar/spinnerRadar";
import ErrorBox from "../../../../shared/errorHandlerComponent/errorHandler";

import "./region.css";

class RegionContainer extends React.Component {
  state = {
    regionClicked: false,
    searchRegion: "",
    regionToRedirect: ""
  };
  chooseRegionToRedirect = x => {
    this.setState({
      regionClicked: true,

      regionToRedirect: x
    });
  };
  changeFilterInput = e => {
    this.setState({
      searchRegion: e.target.value
    });
  };

  render() {
    const { regions, isLoading, error } = this.props;
    const { regionToRedirect, searchRegion, regionClicked } = this.state;
    if (regionClicked) {
      return <Redirect to={`/admin/region/${regionToRedirect}`} />;
    }
    return (
      <Fragment>
        <div className="add-region-content">
          <input
            placeholder="search.."
            className="search-region"
            value={searchRegion}
            onChange={this.changeFilterInput}
          />

          <AddRegion />
        </div>
        <ul>
          {isLoading === false ? (
            error ? (
              <div>
                <ErrorBox
                  color="danger"
                  err={error.err}
                  vibrate="pulsate-fwd"
                  height="80"
                  icon="fas fa-exclamation-triangle"
                />
                <button
                  style={{ color: "gold", border: "none", background: "none" }}
                  onClick={() => window.location.reload()}
                >
                  Reload
                </button>{" "}
              </div>
            ) : (
              regions
                .filter(region =>
                  region.name.toLowerCase().includes(searchRegion.toLowerCase())
                )
                .map(el => (
                  <RegionItem
                    uniqueKey={el._id}
                    regionItem={el.name}
                    chooseRegion={this.chooseRegionToRedirect}
                  />
                ))
            )
          ) : (
            <SpinnerRadar />
          )}
        </ul>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    regions: state.mapIcon.regions,
    isLoading: state.mapIcon.isLoading,
    error: state.error
  };
};
export default connect(mapStateToProps)(RegionContainer);
