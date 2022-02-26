import React from "react";
import Websocket from "react-websocket";
import "./consoleLayout.css";
export default class ConsoleContainer extends React.Component {
  state = {
    consoleFontSize: 15,
    dataa: "",
    msgs: []
  };
  zoomPlus = () => {
    this.setState({
      consoleFontSize: this.state.consoleFontSize + 1
    });
  };
  zoomMinus = () => {
    this.setState({
      consoleFontSize: this.state.consoleFontSize - 1
    });
  };
  render() {
    const { consoleFontSize, data, msgs } = this.state;
    return (
      <div className="console-container">
        <div className="min-max-zoom">
          <i class="fas fa-search-plus" onClick={this.zoomPlus} />
          <i class="fas fa-search-minus" onClick={this.zoomMinus} />
        </div>
        <Websocket
          url="ws://35.246.92.221:5001/socket.io/?EIO=3&transport=websocket"
          onMessage={data => {
            if (data != null && data != undefined) {
              return this.setState({
                data: data,
                msgs: this.state.msgs.concat(data)
              });
            }

            return;
          }}
        />
        {msgs.length > 0 &&
          msgs.map(
            (msg, i) =>
              i !== 0 && (
                <p
                  style={
                    msg.includes("[err]")
                      ? {
                          color: "red",
                          fontSize: `${consoleFontSize}px`
                        }
                      : {
                          color: "green",
                          fontSize: `${consoleFontSize}px`
                        }
                  }
                >
                  {" "}
                  {msg
                    .substring(0, msg.length - 2)
                    .replace('42["message","', "")}{" "}
                </p>
              )
          )}
        }
      </div>
    );
  }
}
