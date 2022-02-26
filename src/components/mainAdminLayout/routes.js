import React, { Component } from "react";
import MapRegion from "./mapRegion/mapRegion";
import Swarm from "./swarmLayout/swarm";
import { Route } from "react-router-dom";
import Transactions from "./transactions/transaction";
import History from "../mainAdminLayout/history/history";
import DashboardPerRegion from "./dashboardPerRegion/dashboard-per-region";
import DeploymentDashboard from "./dashboardPerRegion/deploymentDashboard/deploymentDashboard";
import ConsoleLayout from "./dashboardPerRegion/consoleLayout/consoleLayout";
import States from "./states/states";
import Trades from "../mainAdminLayout/trades/trades";

export default class Routes extends Component {
  render() {
    return (
      <div className="row map-region-row" style={this.props.styling}>
        <Route exact path="/admin" component={MapRegion} />
        <Route
          exact
          path="/admin/region/:region"
          component={DashboardPerRegion}
        />

        <Route exact path="/admin/swarm/:region" component={Swarm} />
        <Route
          excat
          path="/admin/deployment/:region"
          component={DeploymentDashboard}
        />
        <Route
          path="/admin/deploymentConsole/:smid"
          component={ConsoleLayout}
        />
        <Route path="/admin/transactions/:id" component={Transactions} />
        <Route path="/admin/history/:id" component={History} />
        <Route path="/admin/states/:id" component={States} />
        <Route path="/admin/trades/:id" component={Trades} />
      </div>
    );
  }
}
