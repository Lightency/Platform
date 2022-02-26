import React from "react";
import { Alert } from "reactstrap";
import "./errorHandler.css";
class ErrorBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <Alert
        color={this.props.color}
        isOpen={this.state.visible}
        toggle={this.onDismiss}
        className={`${this.props.vibrate} box-height`}
      >
        <i class={this.props.icon} />
        {" " + this.props.err}
      </Alert>
    );
  }
}

export default ErrorBox;
