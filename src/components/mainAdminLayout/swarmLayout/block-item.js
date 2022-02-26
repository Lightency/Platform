import React from "react";
import { connect } from "react-redux";
function BlockItem({ blockData, region, index }) {
  return (
    <a
      href={`http://35.243.190.244:8501/bzz-list:/${blockData.hash}
      `}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="block-item-container">
        <p className="block-item-number">Block #{blockData.blockNumber}</p>
        <div className="blocks-relation" />
        <div className="block-item-info">
          <div>
            <p>Hash : </p>
            <p>{blockData.hash}</p>
          </div>
          <hr />
          <div>
            <p>timestamp : </p>
            <p>{blockData.timeStamp}</p>
          </div>
          <hr />
        </div>
        {/*Talk Bubble container */}
        <div className="talk-bubble-container">
          <div id="talkbubble">click me to visit my swarm satus</div>
        </div>
      </div>
    </a>
  );
}

const mapStateToProps = state => {
  return {
    region: state.mapIcon.region
  };
};
export default connect(
  mapStateToProps,
  null
)(BlockItem);
