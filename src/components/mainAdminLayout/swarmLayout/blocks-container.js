import React from "react";
import BlockItem from "./block-item";
import ErrorBox from "../../../shared/errorHandlerComponent/errorHandler";
class BlockContainer extends React.Component {
  state = {
    inputNumber: ""
  };
  changeInput = e => {
    this.setState({
      inputNumber: e.target.value
    });
  };
  render() {
    const { blocks = [], inputDisplay, changeDisplayInput } = this.props;
    return (
      <div className="col-12 " style={{ position: "relative" }}>
        <div className="filter-blocks">
          <i class="fas fa-search" onClick={changeDisplayInput} />
          <input
            className="search-region"
            style={inputDisplay ? { display: "inline" } : { display: "none" }}
            onChange={this.changeInput}
          />
        </div>
        <div style={{}} className=" blocks-container">
          {blocks && blocks.length > 0 ? (
            blocks
              .filter(el =>
                el.blockNumber.toString().startsWith(this.state.inputNumber)
              )
              .map((el, i) => <BlockItem blockData={el} index={i} />)
          ) : (
            <ErrorBox
              color="warning"
              err="swarm blocks is empty"
              vibrate="pulsate-fwd"
              icon="fas fa-exclamation-triangle"
            />
          )}
        </div>
      </div>
    );
  }
}

export default BlockContainer;
