import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../regions/region.css";
import { connect } from "react-redux";
import { deleteRegionById } from "../../actions";
class DeleteRegion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  deleted = (url, id) => {
    this.props.deleteRegion(url, id);
  };
  render() {
    return (
      <div>
        <i class="fas fa-trash-alt" onClick={this.toggle} />
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Delete region</ModalHeader>
          <ModalBody>are you sure you want to delete Region ?</ModalBody>
          <ModalFooter>
            <button
              className="modal-btn"
              onClick={() => {
                this.deleted(
                  `http://35.246.92.221:5001/api/region/${this.props.regionId}`,
                  this.props.regionId
                );
                this.toggle();
              }}
            >
              Im sure{" "}
            </button>{" "}
            <button className="modal-btn" onClick={this.toggle}>
              Cancel
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
//uniqueKey
const mapStateToProps = () => {};
const mapDipatchToProps = dispatch => {
  return {
    deleteRegion: (url, id) => dispatch(deleteRegionById(url, id))
  };
};

export default connect(
  mapStateToProps,
  mapDipatchToProps
)(DeleteRegion);
