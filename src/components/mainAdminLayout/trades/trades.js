import React, { Component } from "react";
import { connect } from "react-redux";
import "./trades.css";
import Websocket from "react-websocket";
import PricingChart from "../dashboardPerRegion/charts/pricingChart";
const matching = [
  {
    id: "231321",
    type: "sell",
    price: 200.25,
    time: "15:47",
    status: "complete"
  },
  {
    id: "231321",
    type: "sell",
    price: 200.25,
    time: "15:47",
    status: "complete"
  },
  {
    id: "231322",
    type: "buy",
    price: 400.25,
    time: "15:47",
    status: "complete"
  },
  {
    id: "231323",
    type: "sell",
    price: 780.25,
    time: "15:47",
    status: "killed"
  },
  {
    id: "231324",
    type: "sell",
    price: 100.25,
    time: "15:47",
    status: "complete"
  }
];

function getDataHeader(data) {
  const title = data.split(",")[0].split("[")[1];
  if (title) {
    return title.replace(/[^A-Z]/gi, "");
  }
}

function sortMessages(data, reactContext) {
  let header = getDataHeader(data);
  switch (header) {
    case "TradeOps":
      {
        let table = data.split(`"TradeOps",`)[1];
        table = table.substring(0, table.length - 1);
        console.log("yeah we have  TradeOps");
        console.log(JSON.parse(table));
        const tradeTable = JSON.parse(table);
        const sell = tradeTable && tradeTable[0];
        const buy = tradeTable && tradeTable[1];
        console.log(sell);
        reactContext.setState({
          tradeOps: reactContext.state.tradeOps.concat(data),

          sell: reactContext.state.sell.concat(sell),
          buy: reactContext.state.sell.concat(buy)
        });
      }
      break;

    case "matches":
      {
        let table = data.split(`"matches",`)[1];
        table = table.substring(0, table.length - 1);
        console.log("yeah we have  matches");
        console.log(JSON.parse(table));
        const matchesTabel = JSON.parse(table);
        console.log(matchesTabel);
        reactContext.setState({
          matches: reactContext.state.matches.concat(matchesTabel)
        });
      }
      break;

    default:
      console.log("trying");
  }
}

export class Trades extends Component {
  state = {
    filterMatching: "",
    tradeOps: [],
    sell: [],
    buy: [],
    matches: [
      /* { type: "sell", con: { smIdentifier: 1212 }, price: 1524.023 },
      { type: "sell", con: { smIdentifier: 1212 }, price: 1524.023 },
      { type: "sell", con: { smIdentifier: 1212 }, price: 1524.023 },
      { type: "sell", con: { smIdentifier: 1212 }, price: 1524.023 },
      { type: "sell", con: { smIdentifier: 1212 }, price: 1524.023 },
      { type: "sell", con: { smIdentifier: 1212 }, price: 1524.023 },
      { type: "sell", con: { smIdentifier: 1212 }, price: 1524.023 },
      { type: "sell", con: { smIdentifier: 1212 }, price: 1524.023 },
      { type: "sell", con: { smIdentifier: 1212 }, price: 1524.023 },
      { type: "sell", con: { smIdentifier: 1212 }, price: 1524.023 },
      { type: "sell", con: { smIdentifier: 1212 }, price: 1524.023 },
      { type: "sell", con: { smIdentifier: 1212 }, price: 1524.023 },
      { type: "sell", con: { smIdentifier: 1212 }, price: 1524.023 }*/
    ]
  };
  changeFilterMatching = e => {
    this.setState({
      filterMatching: e.target.value
    });
  };
  render() {
    const { filterMatching, matches, sell, buy } = this.state;
    return (
      <div className="col-12" style={{ color: "#fff" }}>
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
        <div className="row" style={{ padding: "30px" }}>
          <div className="col-lg-8 col-md-7 ">
            <div style={{ height: "500px" }}>
              <PricingChart
                data1={sell && sell.map(el => (el ? el.volume : 0))}
                data2={buy && buy.map(el => (el ? el.volume : 0))}
              />
            </div>
            <div style={{ width: "100%" }}>
              <div className="data-table-array">
                <p>
                  Orders history : <span>{matches.length}</span>
                </p>
                <input
                  placeholder="filter by id.."
                  value={filterMatching}
                  onChange={this.changeFilterMatching}
                />
              </div>
              <div className="table-respancive match-tab">
                <table class="table matching-table  ">
                  <thead>
                    <tr>
                      <th scope="col">
                        <i class="fas fa-american-sign-language-interpreting" />{" "}
                        Type
                      </th>
                      <th scope="col">
                        <i class="fas fa-key" /> Id
                      </th>
                      <th scope="col">
                        <i class="fas fa-money-bill" /> Price
                      </th>
                      <th scope="col">
                        <i class="far fa-clock" /> Time
                      </th>
                      <th scope="col">
                        <i class="fas fa-shield-alt" /> Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.matches &&
                      this.state.matches
                        .filter(el =>
                          el.con.smIdentifier
                            .toString()
                            .includes(filterMatching)
                        )
                        .map(el => (
                          <tr>
                            <td
                              style={
                                el.type === "Sell"
                                  ? {
                                      color: "rgb(186, 58, 58)",
                                      fontWeight: "bold"
                                    }
                                  : {
                                      color: "rgb(68, 128, 115)",
                                      fontWeight: "bold"
                                    }
                              }
                            >
                              {el.type}
                            </td>
                            <td>{el.con.smIdentifier}</td>
                            <td>{el.price}</td>
                            <td>{15}</td>
                            <td
                              style={
                                el.status === "killed"
                                  ? {
                                      color: "rgb(186, 58, 58)",
                                      fontWeight: "bold"
                                    }
                                  : {
                                      color: "rgb(68, 128, 115)",
                                      fontWeight: "bold"
                                    }
                              }
                            >
                              {"completed"}
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-5 " style={{ textAlign: "left" }}>
            <div className="order-book-title-container">
              <h5>ORDER BOOK</h5>
            </div>

            <div class="table-responsive sell-table-container">
              <table
                className="table order-book sel"
                style={{ borderRadius: "7px" }}
              >
                <tr style={{ height: "20px" }}>
                  <th>sell </th>
                  <th />
                </tr>
                <tr>
                  <th className="order-book-titles">Price </th>
                  <th className="order-book-titles">Volume </th>
                </tr>
                {sell.length > 1 &&
                  sell.map(el => {
                    return (
                      <tr>
                        <td>{el ? el.price : 0}</td>
                        <td>{el ? el.volume : 0}</td>
                      </tr>
                    );
                  })}
              </table>
            </div>
            <div
              class="table-responsive  sell-table-container"
              style={{ marginBottom: "50px" }}
            >
              <table
                className="table order-book buy"
                style={{ borderRadius: "7px" }}
              >
                <tr>
                  <th>buy</th>
                  <th />
                </tr>
                <tr>
                  <th className="order-book-titles">Price </th>
                  <th className="order-book-titles">Volume </th>
                </tr>
                {this.state.buy.length > 1 &&
                  this.state.buy.map(el => {
                    return (
                      <tr>
                        <td>{el ? el.price : 0}</td>
                        <td>{el ? el.volume : 0}</td>
                      </tr>
                    );
                  })}
              </table>
            </div>
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
)(Trades);
