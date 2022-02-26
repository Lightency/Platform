import React, { Component } from "react";

import SideBar from "../../shared/sidebar/index";
import Header from "../../shared/header/header";
import Routes from "./routes";
import "./mainAdminLayout.css";

export default class MainLayout extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return this.props.location.pathname !== "/admin" ? (
      <div className="container-fluid" style={{ backgroundColor: "#272e3a" }}>
        <div className="row">
          <SideBar />
          <div
            className=" col-lg-1 col-md-2 hidden"
            style={{ height: "100vh" }}
          />
          <div
            className="col-lg-11 col-md-10"
            style={{ backgroundColor: "#272e3a" }}
          >
            <Header />
            <hr className="chart-break" />
            <Routes
              styling={{
                flexWrap: "wrap",
                overflow: "hidden"
              }}
            />
          </div>
        </div>
      </div>
    ) : (
      <div className="container-fluid" style={{ backgroundColor: "#272e3a" }}>
        <div className="row">
          <div className="col-sm-12 main-admin-screen ">
            <Header />
            <hr className="chart-break" />
            <Routes
              styling={{ flexWrap: "wrap-reverse", overflow: "hidden" }}
            />
          </div>
        </div>
      </div>
    );
  }
}
