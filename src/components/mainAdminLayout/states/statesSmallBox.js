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
        ) : title == "operations" ? (
          <div className="small-box-content">
            {logs &&
              logs.length > 0 &&
              logs.map((msg, i) => {
                let s = msg.slice(4, msg.length - 1).split('","');
                return (
                  <p
                    style={{
                      color: "white",
                      fontSize: `15px`
                    }}
                  >
                    {" "}
                    <span style={{ fontWeight: "bold", color: "#b3adad" }}>
                      {i + 1}
                      {s[0]} :{" "}
                    </span>
                    <span>{s[1]}</span>
                  </p>
                );
              })}
          </div>
        ) : (
          <div className="small-box-content">
            {logs &&
              logs.length > 0 &&
              logs.map((msg, i) => (
                <p
                  style={{
                    color: "green",
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
