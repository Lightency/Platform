import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import TransactionItem from "./transactionItem";
import SpinnerRadar from "../../../shared/spinnerRadar/spinnerRadar";
import { getTradeRegion, generateTokeNTrade } from "../actions";
import "./trade.css";
class Transactions extends Component {
  componentDidMount() {
    const { getTrade, generateToken } = this.props;
    generateToken("http://35.246.92.221:5001/api/token", {
      assetLedgerId: "0x8d8d5ebf3f1a60c476d265fc558393ab2cb36e87"
    });
    getTrade(
      `http://35.246.92.221:5001/api/region/transactions/${
        this.props.match.params.id
      }`
    );
  }
  render() {
    const { trade, token, loding } = this.props;

    return (
      <Fragment>
        {loding ? (
          <SpinnerRadar />
        ) : (
          <Fragment>
            <div className="col-lg-4 col-md-6">
              <TransactionItem
                token={token && token.data}
                trade={trade && trade.transactions}
              />
            </div>
            <div className="col-lg-4 col-md-6 ">
              <TransactionItem />
            </div>{" "}
            <div className="col-lg-4 col-md-6 ">
              <TransactionItem />
            </div>
            <div className="col-12">
              <div className="row" style={{ padding: "0px 15px" }}>
                <div class="table-responsive">
                  <table
                    className="table zebra-table"
                    style={{ borderRadius: "7px" }}
                  >
                    <tr>
                      <th>Timestamp</th>
                      <th>From </th>
                      <th>To</th>
                      <th>Amount</th>
                      <th>Type</th>
                    </tr>
                    {trade &&
                      trade.transactions &&
                      trade.transactions.map(transaction => (
                        <tr>
                          <td>{transaction.timeStamp}</td>
                          <td>{transaction.From}</td>
                          <td>{transaction.To}</td>
                          <td>{transaction.amount}</td>
                          <td>{transaction.type}</td>
                        </tr>
                      ))}
                  </table>
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    trade: state.mapIcon.trade,
    token: state.token,
    loding: state.mapIcon.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTrade: url => dispatch(getTradeRegion(url)),
    generateToken: (url, x) => dispatch(generateTokeNTrade(url, x))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transactions);
