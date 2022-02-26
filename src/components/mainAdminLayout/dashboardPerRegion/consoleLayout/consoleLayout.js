import React, { Component, Fragment } from "react";
import FormConsole from "./formConsole";
import "./consoleLayout.css";
import ConsoleContainer from "./consoleContainer";
export default class consoleLayout extends Component {
  render() {
    console.log(this.props.match.params.smid);
    return (
      <Fragment>
        <div
          className="col-lg-6 form-console-container
          "
        >
          <FormConsole smartmeter={this.props.match.params.smid} />
        </div>
        <div className="col-lg-6 form-console-container">
          <ConsoleContainer />
        </div>
      </Fragment>
    );
  }
}
