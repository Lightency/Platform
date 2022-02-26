import React, { Component } from "react";
import { connect } from "react-redux";
import Simplespinner from "../../../shared/simpleSpinner/simpleSpinner";
class StatesSmallBox extends Component {
  state = {
    isLoading: true
  };

  loading = () => {
    if (!this.state.isLoading) {
      this.setState({
        isLoading: true
      });
      setTimeout(() => {
        this.setState({
          isLoading: false
        });
      }, 3000);
    }
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 3000);
  };
  componentDidMount() {
    this.loading();
  }
  render() {
    const { isLoading } = this.state;
    const { height, title, logs } = this.props;
    return (
      <div
        className="states-small-box"
        style={{ height: `${height && height}px` }}
      >
        <div className="title-reload">
          <div className="title-time">
            <span style={{ color: "white" }} className="small-box-title">
              {title || "Title"}
            </span>
            <span className="small-box-time">time</span>
          </div>
          <div className="reload">
            <span>
              <i class="fas fa-redo-alt" onClick={this.loading} />
            </span>
          </div>
        </div>
        {isLoading ? (
          <Simplespinner border="4px solid gold" />
        ) : title == "smData" ? (
          <div className="small-box-content">
            {/* *****************TEST FOR SM DATA
               totalProd: 0,
        totalCon: 86,
        timeSpan: 1563978847691,
        solarProductionSurplus: 0,
        solarProduction: 0,
        solarConsumption: 0,
        surplus: 0,
        battryAndSurplusConsumption: 0,
        remainingTokenElectricityBalance: -36,
        token: 9998,
        status: 'negative',
        tokenElectricityBalanceConsumed: 86 },
            *******************/}
            {logs &&
              logs.length > 0 &&
              logs.map(el => {
                let m = JSON.parse(el.replace("42", ""));
                let s = m[1];
                return s.map((el, i) => (
                  <ul style={{ color: "white" }}>
                    <h3>{i + 1}</h3>
                    <li>
                      <span style={{ fontWeight: "bold", color: "#b3adad" }}>
                        deviceID{" "}
                      </span>
                      : {el.deviceId}
                    </li>
                    <p style={{ color: "aqua", fontWeight: "bold" }}>
                      JSON PAYLOAD CURRENT ELECTRICDATA
                    </p>
                    <li>
                      <span style={{ fontWeight: "bold", color: "#b3adad" }}>
                        current electric consumption :{" "}
                      </span>

                      {el &&
                        el.jsonPayload &&
                        el.jsonPayload.currentElectricData &&
                        el.jsonPayload.currentElectricData.con}
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold", color: "#b3adad" }}>
                        current electric production :{" "}
                      </span>

                      {el &&
                        el.jsonPayload &&
                        el.jsonPayload.currentElectricData &&
                        el.jsonPayload.currentElectricData.prod}
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold", color: "#b3adad" }}>
                        current electric totalProduction :{" "}
                      </span>

                      {el &&
                        el.jsonPayload &&
                        el.jsonPayload.currentElectricData &&
                        el.jsonPayload.currentElectricData.totalProd}
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold", color: "#b3adad" }}>
                        current electric timestamp :{" "}
                      </span>

                      {el &&
                        el.jsonPayload &&
                        el.jsonPayload.currentElectricData &&
                        el.jsonPayload.currentElectricData.timeSpan}
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold", color: "#b3adad" }}>
                        current electric token:{" "}
                      </span>

                      {el &&
                        el.jsonPayload &&
                        el.jsonPayload.currentElectricData &&
                        el.jsonPayload.currentElectricData.token}
                    </li>
                    <p style={{ color: "aqua", fontWeight: "bold" }}>
                      JSON PAYLOAD FORCAST ELECTRICDATA :
                    </p>
                    <li>
                      <span style={{ fontWeight: "bold", color: "#b3adad" }}>
                        forcast electric consumption:{" "}
                      </span>

                      {el &&
                        el.jsonPayload &&
                        el.jsonPayload.forcastElectricData &&
                        el.jsonPayload.forcastElectricData.conForcast}
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold", color: "#b3adad" }}>
                        forcast electric production:{" "}
                      </span>
                      :
                      {el &&
                        el.jsonPayload &&
                        el.jsonPayload.forcastElectricData &&
                        el.jsonPayload.forcastElectricData.prodForcast}
                    </li>
                    <hr style={{ color: "aqua" }} />
                  </ul>
                ));
              })}
            {/* *****************TEST FOR SM DATA*******************/}
          </div>
        ) : title == "historyData" ? (
          <div className="small-box-content">
            {/* *****************TEST FOR SM DATA
               
      
            *******************/}
            {logs &&
              logs.length > 0 &&
              logs.map(el => {
                let m = JSON.parse(el.replace("42", ""));
                let s = m[1];
                return s.map((el, i) => (
                  <ul style={{ color: "white" }}>
                    <h3>{i + 1}</h3>
                    <li>
                      <span style={{ fontWeight: "bold", color: "#b3adad" }}>
                        deviceID{" "}
                      </span>
                      : {el.deviceId}
                    </li>
                    <p style={{ color: "aqua", fontWeight: "bold" }}>
                      JSON PAYLOAD CURRENT ELECTRICDATA:
                    </p>
                    <li>
                      <span style={{ fontWeight: "bold", color: "#b3adad" }}>
                        current electric consumption :{" "}
                      </span>

                      {el &&
                        el.jsonPayload &&
                        el.jsonPayload.currentElectricData &&
                        el.jsonPayload.currentElectricData.con}
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold", color: "#b3adad" }}>
                        current electric production :{" "}
                      </span>

                      {el &&
                        el.jsonPayload &&
                        el.jsonPayload.currentElectricData &&
                        el.jsonPayload.currentElectricData.prod}
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold", color: "#b3adad" }}>
                        current electric totalProduction :{" "}
                      </span>

                      {el &&
                        el.jsonPayload &&
                        el.jsonPayload.currentElectricData &&
                        el.jsonPayload.currentElectricData.totalProd}
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold", color: "#b3adad" }}>
                        current electric timestamp :{" "}
                      </span>

                      {el &&
                        el.jsonPayload &&
                        el.jsonPayload.currentElectricData &&
                        el.jsonPayload.currentElectricData.timeSpan}
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold", color: "#b3adad" }}>
                        current electric token:{" "}
                      </span>

                      {el &&
                        el.jsonPayload &&
                        el.jsonPayload.currentElectricData &&
                        el.jsonPayload.currentElectricData.token}
                    </li>
                    <p style={{ color: "aqua", fontWeight: "bold" }}>
                      JSON PAYLOAD FORCAST ELECTRICDATA :
                    </p>
                    <li>
                      <span style={{ fontWeight: "bold", color: "#b3adad" }}>
                        forcast electric consumption:{" "}
                      </span>

                      {el &&
                        el.jsonPayload &&
                        el.jsonPayload.forcastElectricData &&
                        el.jsonPayload.forcastElectricData.conForcast}
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold", color: "#b3adad" }}>
                        forcast electric production:{" "}
                      </span>

                      {el &&
                        el.jsonPayload &&
                        el.jsonPayload.forcastElectricData &&
                        el.jsonPayload.forcastElectricData.prodForcast}
                    </li>
                    <hr style={{ color: "aqua" }} />
                  </ul>
                ));
              })}{" "}
          </div>
        ) : title == "TradeOps" ? (
          <div className="small-box-content">
            {/* *****************TEST FOR SM DATA
           {"producerExcessOffer":495.5,"smIdentifier":"5d3acc14594e94742c6d2cc4",
           "smPublicKey":"0x4819D2FCf774f13e49f8E0e03465b211C7F8A9f1","price":2,"volume":247}
      
            *******************/}
            {logs &&
              logs.length > 0 &&
              logs.map(el => {
                let m = JSON.parse(el.replace("42", ""));
                let s = m[1];
                return s.map((el, i) =>
                  el.map((trade, i) => (
                    <ul style={{ color: "white" }}>
                      <li>
                        <span style={{ fontWeight: "bold", color: "#b3adad" }}>
                          producer ExcessOffer :{" "}
                        </span>
                        {trade.producerExcessOffer}
                      </li>
                      <li>
                        <span style={{ fontWeight: "bold", color: "#b3adad" }}>
                          smIdentifier :
                        </span>
                        {trade.smIdentifier}
                      </li>
                      <li>
                        <span style={{ fontWeight: "bold", color: "#b3adad" }}>
                          smPublicKey :{" "}
                        </span>
                        {trade.smPublicKey}
                      </li>

                      <li>
                        <span style={{ fontWeight: "bold", color: "#b3adad" }}>
                          price :{" "}
                        </span>
                        {trade.price}
                      </li>
                      <li>
                        <span style={{ fontWeight: "bold", color: "#b3adad" }}>
                          volume :{" "}
                        </span>
                        {trade.volume}
                      </li>

                      <hr style={{ color: "aqua" }} />
                    </ul>
                  ))
                );
              })}{" "}
          </div>
        ) : title == "Actions" ? (
          <div className="small-box-content">
            {/* *****************TEST FOR SM DATA
               totalProd: 0,
        totalCon: 86,
        timeSpan: 1563978847691,
        solarProductionSurplus: 0,
        solarProduction: 0,
        solarConsumption: 0,
        surplus: 0,
        battryAndSurplusConsumption: 0,
        remainingTokenElectricityBalance: -36,
        token: 9998,
        status: 'negative',
        tokenElectricityBalanceConsumed: 86 },
            *******************/}
            {logs &&
              logs.length > 0 &&
              logs.map(el => {
                let m = JSON.parse(el.replace("42", ""));
                let s = m[1];
                return s.map((el, i) => (
                  <ul style={{ color: "white" }}>
                    <h3>{i + 1}</h3>
                    <li>
                      <span style={{ fontWeight: "bold", color: "#b3adad" }}>
                        type:
                      </span>
                      {el.type}
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold", color: "#b3adad" }}>
                        public key:
                      </span>
                      <span style={{ wordWrap: "break-word" }}>
                        {el.publicKey}
                      </span>
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold", color: "#b3adad" }}>
                        qte:
                      </span>
                      {el.qte}
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold", color: "#b3adad" }}>
                        user id:
                      </span>
                      {el.userId}
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold", color: "#b3adad" }}>
                        consumptio:
                      </span>
                      {el.con}
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold", color: "#b3adad" }}>
                        prodcution:
                      </span>
                      {el.prod}
                    </li>
                    <hr style={{ color: "aqua" }} />
                  </ul>
                ));
              })}{" "}
          </div>
        ) : (
          <div className="small-box-content">
            {logs &&
              logs.length > 0 &&
              logs.map((msg, i) => (
                <p
                  style={{
                    color: "white",
                    fontSize: `15px`
                  }}
                >
                  {" "}
                  {msg}
                </p>
              ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatesSmallBox);
