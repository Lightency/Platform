import React from "react";
import "./trade.css";
export default function TransactionItem({ token = "m", trade = [] }) {
  return (
    <div
      style={{ backgroundColor: "#272e3a", color: "white", height: "300px" }}
      className="text-center"
    >
      <div className="box-container">
        <div class="total-of-tokens">
          {token === "m" ? (
            <span>
              <span className="grey-title">token:</span> 1kw
            </span>
          ) : (
            <span>
              <span className="grey-title">symbol:</span> {token.symbol}
            </span>
          )}
          {token === "m" ? (
            <span className="grey-title">avg/1kwh: 4 </span>
          ) : (
            <span className="grey-title">uriBase: {token.uriBase} </span>
          )}
        </div>
        {/*********SELL BUY MINIMUN
         */}

        {token === "m" ? (
          <div>
            <div className="sell-buy">
              <div className="sell-buy-item sell">
                <div className="sell-token">
                  <span>sell</span>
                  <span>1kwh</span>
                </div>
                <div className="number-of-tokens">
                  <span>10</span>
                </div>
              </div>
              <div className="chevron-down">
                <svg
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 386.257 386.257"
                >
                  <polygon points="0,96.879 193.129,289.379 386.257,96.879" />
                </svg>{" "}
              </div>
              {/*BUYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY */}
              <div className="sell-buy-item buy">
                <div className="sell-token">
                  <span>Buy</span>
                  <span>1kwh</span>
                </div>

                <div className="number-of-tokens">
                  <span>5</span>
                </div>
              </div>
              {/**BUYYYYYYYYYYYYY */}
            </div>
            {/*SELL BUY MININMUM */}
            {/*********SELL BUY MINIMUN
             */}
            <div className="sell-buy">
              <div className="sell-buy-item sell">
                <div className="sell-token">
                  <span>sell</span>
                  <span>1kwh</span>
                </div>

                <div className="number-of-tokens">
                  <span>10</span>
                </div>
              </div>
              {/*BUYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY */}
              <div className="chevron-down">
                <svg
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="292.362"
                  height="292.362"
                  viewBox="0 0 292.362 292.362"
                >
                  <path d="M286.935,197.286L159.028,69.379c-3.613-3.617-7.895-5.424-12.847-5.424s-9.233,1.807-12.85,5.424L5.424,197.286 C1.807,200.9,0,205.184,0,210.132s1.807,9.233,5.424,12.847c3.621,3.617,7.902,5.428,12.85,5.428h255.813 c4.949,0,9.233-1.811,12.848-5.428c3.613-3.613,5.427-7.898,5.427-12.847S290.548,200.9,286.935,197.286z" />
                </svg>{" "}
              </div>

              <div className="sell-buy-item buy">
                <div className="sell-token">
                  <span>Buy</span>
                  <span>1kwh</span>
                </div>
                <div className="number-of-tokens">
                  <span>5</span>
                </div>
              </div>
              {/**BUYYYYYYYYYYYYY */}
            </div>
          </div>
        ) : (
          <div className="total-of-tokens">
            <span>
              <span style={{ color: "gray" }}>supply:</span> {token.supply}
            </span>
            <span className="schema-id">
              schema id:{token && token.schemaId && token.schemaId.slice(0, 7)}
            </span>
          </div>
        )}
        {trade.length > 0 ? (
          <span
            style={{
              textAlign: "left",
              color: "gray",
              width: "100%",
              marginLeft: "20px"
            }}
          >
            nbr of transactions :{" "}
            <span style={{ color: "white" }}>{trade.length}</span>
          </span>
        ) : (
          false
        )}
        {/*SELL BUY MININMUM */}
      </div>
    </div>
  );
}
