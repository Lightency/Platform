import React, { Component } from "react";
import { connect } from "react-redux";
import "./states.css";
import Statessmallbox from "./statesSmallBox";
import StatessmallboxTabel from "./statesSmallBoxTabel";

import Websocket from "react-websocket";

function getDataHeader(data) {
  const title = data.split(",")[0].split("[")[1];
  if (title) {
    return title.replace(/[^A-Z]/gi, "");
  }
}

function sortMessages(data, reactContext) {
  let header = getDataHeader(data);
  switch (header) {
    case "operations":
      {
        console.log("yeah we have an operation");
        reactContext.setState({
          operations: reactContext.state.operations.concat(data)
        });
      }
      break;
    case "smData":
      {
        let table = data.split(`"smData",`)[1];
        table = table.substring(0, table.length - 1);
        console.log("yeah we have an smData");
        console.log(table);
        reactContext.setState({
          smData: reactContext.state.smData.concat(data)
        });
      }
      break;
    case "historyData":
      {
        let table = data.split(`"historyData",`)[1];
        table = table.substring(0, table.length - 1);
        console.log("yeah we have an historyData");
        console.log(table);
        reactContext.setState({
          smData: reactContext.state.smData.concat(data)
        });
      }
      break;
    case "Actions":
      {
        let table = data.split(`"Actions",`)[1];
        table = table.substring(0, table.length - 1);
        console.log("yeah we have  Actions");
        console.log(table);
        reactContext.setState({
          actions: reactContext.state.actions.concat(data)
        });
      }
      break;

    case "TradeOps":
      {
        let table = data.split(`"TradeOps",`)[1];
        table = table.substring(0, table.length - 1);
        console.log("yeah we have  TradeOps");
        console.log(table);
        reactContext.setState({
          tradeOps: reactContext.state.tradeOps.concat(data)
        });
      }
      break;

    default:
      console.log("trying");
  }
}

function reset(reactContext) {
  console.log("reset data");
  return reactContext.setState({
    msgs: [],
    operations: [],
    smData: [],
    history: [],
    actions: [],
    tradeOps: []
  });
}

class States extends Component {
  state = {
    msgs: [],
    operations: [],
    smData: [],
    history: [],
    actions: [],
    tradeOps: []
  };

  componentDidMount() {
    let intervalId = setInterval(() => reset(this), 400000000000);
  }
  render() {
    const { operations, smData, actions, tradeOps } = this.state;
    return (
      <div className="col-12 ">
        <Websocket
          url="ws://35.246.92.221:5001/socket.io/?EIO=3&transport=websocket"
          onMessage={data => {
            if (data != null && data != undefined) {
              console.log(getDataHeader(data));
              return sortMessages(data, this);
            }

            return;
          }}
        />
        <div className="row states-row">
          <div className="col-lg-4 col-md-6">
            <Statessmallbox title={"operations"} logs={operations} />
          </div>
          <div className="col-lg-8 col-md-6">
            <StatessmallboxTabel title={"TradeOps"} logs={tradeOps} />
          </div>
        </div>
        {/***********SECOND ROW************** */}
        <div className="row states-row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <StatessmallboxTabel
              title={"historyData"}
              logs={smData}
              height="200"
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <StatessmallboxTabel
              title={"Actions"}
              logs={actions}
              height="200"
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <StatessmallboxTabel title={"smData"} logs={smData} height="200" />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <Statessmallbox height="200" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(States);
