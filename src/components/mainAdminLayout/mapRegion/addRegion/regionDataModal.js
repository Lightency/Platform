import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { createRegion } from "../../actions";
import * as yup from "yup";
import { Form, Field, withFormik } from "formik";
import { connect } from "react-redux";

var x = false;
class RegionDataModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: x
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const { errors, error, touched, resetForm } = this.props;
    console.log(error);

    return (
      <div>
        <button
          className="user-dash-wallet-exchange add-modal-btn"
          onClick={this.toggle}
        >
          + Add region
        </button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>ADD REGION</ModalHeader>
          <Form>
            <ModalBody>
              <label>Region name</label>{" "}
              <Field
                className="form-control"
                name="region"
                style={
                  errors.region &&
                  touched.region && {
                    borderColor: "#FF0000",
                    boxShadow:
                      "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6)"
                  }
                }
              />
              {touched.region && errors.region && (
                <p style={{ color: "#ff0000" }}>{errors.region}</p>
              )}
              <label>Iot gateway</label>{" "}
              <Field
                className="form-control"
                name="iotGateWay"
                style={
                  errors.iotGateWay &&
                  touched.iotGateWay && {
                    borderColor: "#FF0000",
                    boxShadow:
                      "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6)"
                  }
                }
              />
              {touched.iotGateWay && errors.iotGateWay && (
                <p style={{ color: "#ff0000" }}>{errors.iotGateWay}</p>
              )}
              <label>latitude</label>
              <Field
                className="form-control"
                name="latitude"
                style={
                  errors.latitude &&
                  touched.latitude && {
                    borderColor: "#FF0000",
                    boxShadow:
                      "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6)"
                  }
                }
              />
              {errors.latitude && touched.latitude && (
                <p style={{ color: "#ff0000" }}>{errors.latitude}</p>
              )}
              <label>langtitude</label>{" "}
              <Field
                className="form-control"
                name="longtitude"
                style={
                  errors.longtitude &&
                  touched.longtitude && {
                    borderColor: "#ff0000",
                    boxShadow:
                      "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6)"
                  }
                }
              />
              {errors.longtitude && touched.longtitude && (
                <p style={{ color: "#ff0000" }}>{errors.longtitude}</p>
              )}
            </ModalBody>
            <ModalFooter>
              <button className="modal-btn" type="submit">
                + Add
              </button>{" "}
              <button
                className="modal-btn"
                onClick={() => {
                  resetForm();
                  this.toggle();
                }}
              >
                Cancel
              </button>
              {error && error}
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addRegion: (url, regionData) => dispatch(createRegion(url, regionData))
  };
};
const FormikRegion = withFormik({
  mapPropsToValues({ region, latitude, longtitude, iotGateWay }) {
    return {
      region: region || "",
      iotGateWay: iotGateWay || "",

      latitude: latitude || "",
      longtitude: longtitude || ""
    };
  },
  validationSchema: yup.object().shape({
    region: yup
      .string()
      .min(3)
      .required(),
    iotGateWay: yup
      .string()
      .min(11)
      .required(),
    latitude: yup
      .string()
      .min(3)
      .required(),
    longtitude: yup
      .string()
      .min(3)
      .required()
  }),
  resetFo({ resetForm }) {
    resetForm();
  },
  handleSubmit(values, { props, resetForm }) {
    props.addRegion("http://35.246.92.221:5001/api/region/add", {
      name: values.region,
      mqttServer: values.iotGateWay,
      latitude: parseFloat(values.latitude),
      longitude: parseFloat(values.longtitude)
    });

    resetForm();
  }
})(RegionDataModal);

const mapStateToProps = state => {
  return {
    error: state.mapIcon.error
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormikRegion);
