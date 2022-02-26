/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import "../sidebar/sidebar.css";
class Header extends React.Component {
  render() {
    return (
      <div className="user-dash-status row" style={{ position: "relative" }}>
        <div className="user-dash-wallet col-lg-7 col-sm-8">
          <div className="row my-dash-wallet">
            <div className="user-dash-wallet-logo col-7 ">
              <img
                className="light-logo"
                src="https://i.imgur.com/LV7V7t2.png"
                alt="Light"
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "gold ", fontWeight: "bold" }}>
                  MASTER ADMIN ID
                </span>
                <span style={{ color: "white" }}>0XHE15236548FC15</span>
              </div>
            </div>

            <div className="col-5">
              <div className="user-dash-wallet-exchange">
                <span className="exchange-btn">CHANGE LOCATION</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-sm-4 user-dash-notif-container">
          <div className="user-dash-notif ">
            <span className="user-dash-notif-alert">ALERTS(0)</span>
            <span className="user-dash-notif-notifs">NOTIFICATION(2)</span>
          </div>
        </div>

        <hr />
      </div>
    );
  }
}

export default Header;
