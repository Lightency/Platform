/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getRegions } from "../../components/mainAdminLayout/actions";
import ReginItem from "../../components/mainAdminLayout/mapRegion/regions/region-item";

/*const mapDispatchToProps = dispatch => {
  return {
    getAllRegion: url => dispatch(getRegions(url))
  };
};*/
function SideBar({ regionName, getAllRegion, id }) {
  if (regionName._id !== undefined) {
    localStorage.setItem("id", regionName && regionName._id);
  }
  return (
    <div
      className="sidebar col-lg-1 col-md-2 col-sm-12"
      style={{
        position: "fixed",
        zIndex: "1444"
      }}
    >
      <div className="sidebar-logo bounce-top ">
        <i className="far fa-window-close" />
        <img
          className="main-logo"
          src="https://i.imgur.com/xfRclQT.png"
          alt="Lightency"
        />
      </div>
      <div>
        <NavLink to="/admin">
          <div
            className="sidebar-element"
            onClick={() => getAllRegion("http://35.246.92.221:5001/api/region")}
          >
            <img
              className="element-logo"
              src="https://i.imgur.com/fb1T1LW.png"
              alt="Lightency"
            />
            <span className="element-title">Dashboard</span>
          </div>
        </NavLink>
        <NavLink to={`/admin/region/${localStorage.getItem("id")}`}>
          <div className="sidebar-element">
            <img
              className="element-logo"
              src="https://i.imgur.com/Ix559CA.png"
              alt="Lightency"
            />
            <span className="element-title">Region dashboard</span>
          </div>
        </NavLink>
        <NavLink to={`/admin/deployment/${localStorage.getItem("id")}`}>
          <div className="sidebar-element">
            <img
              className="element-logo"
              src="https://i.imgur.com/Ix559CA.png"
              alt="Lightency"
            />
            <span className="element-title">Smarts</span>
          </div>
        </NavLink>
        <NavLink to={`/admin/swarm/${localStorage.getItem("id")}`}>
          <div className="sidebar-element">
            <img
              className="element-logo"
              src="https://i.imgur.com/pHzmQpn.png"
              alt="Lightency"
            />
            <span className="element-title">Swarm</span>
          </div>
        </NavLink>
        <NavLink to={`/admin/transactions/${localStorage.getItem("id")}`}>
          <div className="sidebar-element">
            <img
              className="element-logo"
              src="https://i.imgur.com/Ix559CA.png"
              alt="Lightency"
            />
            <span className="element-title">Transactions</span>
          </div>
        </NavLink>
        <NavLink to={`/admin/history/${localStorage.getItem("id")}`}>
          <div className="sidebar-element">
            <img
              className="element-logo"
              src="https://i.imgur.com/Ix559CA.png"
              alt="Lightency"
            />
            <span className="element-title">History</span>
          </div>
        </NavLink>
        <NavLink to={`/admin/states/${localStorage.getItem("id")}`}>
          <div className="sidebar-element">
            <img
              className="element-logo"
              src="https://i.imgur.com/Ix559CA.png"
              alt="Lightency"
            />
            <span className="element-title">States</span>
          </div>
        </NavLink>
        <NavLink to={`/admin/trades/${localStorage.getItem("id")}`}>
          <div className="sidebar-element">
            <img
              className="element-logo"
              src="https://i.imgur.com/Ix559CA.png"
              alt="Lightency"
            />
            <span className="element-title">Trades</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    regionName: state.mapIcon.region,
    id: state.mapIcon.id
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAllRegion: url => dispatch(getRegions(url))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
