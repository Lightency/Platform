import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { deploySmartMeter } from "../../actions";
import SimpleSpinneer from "../../../../shared/simpleSpinner/simpleSpinner";
import "./consoleLayout.css";
import axios from "axios";
class FormConsole extends React.Component {
  state = {
    userId: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    isLoading: false
  };
  deploy = e => {
    e.preventDefault();
    const { deploySm } = this.props;
    this.setState({
      isLoading: true
    });
    axios
      .post("http://35.246.92.221:5001/api/user/register", {
        smeter: this.props.smartmeter,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        userId: this.state.userId,
        telephone: this.state.phoneNumber,
        email: this.state.email
      })
      .then(res => {
        this.setState({
          isLoading: false
        });
        console.log(res.data);
      })
      .catch(err => {
        this.setState({
          isLoading: false
        });
        console.log(err.response.data);
      });
  };
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { smartmeter } = this.props;
    const { isLoading } = this.state;
    return (
      <Form className="form-console">
        <FormGroup>
          <Label for="id">id</Label>
          <Input type="text" name="id" id="id" value={smartmeter} />
        </FormGroup>
        <FormGroup>
          <Label for="userid">userId</Label>
          <Input type="text" name="userId" id="userId" onChange={this.change} />
        </FormGroup>
        <FormGroup>
          <Label for="first-name">first name</Label>
          <Input
            type="text"
            name="firstName"
            id="first-name"
            onChange={this.change}
            value={this.state.firstName}
          />
        </FormGroup>
        <FormGroup>
          <Label for="last-name">last name</Label>
          <Input
            type="text"
            name="lastName"
            id="last-name"
            onChange={this.change}
          />
        </FormGroup>{" "}
        <FormGroup>
          <Label for="email">Email</Label>
          <Input name="email" id="email" onChange={this.change} />
        </FormGroup>{" "}
        <FormGroup>
          <Label for="phoneNumber">phone number</Label>
          <Input
            type="text"
            name="phoneNumber"
            id="phone-number"
            onChange={this.change}
          />
        </FormGroup>
        <div
          style={{
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <button className="btn btn-lightency" onClick={this.deploy}>
            deploy
          </button>{" "}
          {isLoading && (
            <span>
              <SimpleSpinneer border={"4px solid #ffdd00"} />
            </span>
          )}
        </div>
      </Form>
    );
  }
}
const mapStateToProps = state => {};
const mapDispatchToProps = dispatch => {
  return {
    deploySm: (url, x) => dispatch(deploySmartMeter(url, x))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormConsole);
