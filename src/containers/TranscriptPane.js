import React from "react";

import "./TranscriptPane.css";

function TranscriptPane(props) {
  return (
    <div className="ttpane">
      <div className="ttCloseBtnBg"></div>
      <div className="ttCloseBtn" onClick={props.toggleTranscript}>
        X
      </div>
      <div className="transcript">
        <p>Lorem</p>
      </div>
    </div>
  );
}

export default TranscriptPane;
