import React from "react";
import { connect } from "react-redux";

import { closeTranscript } from "../actions/playerActions";
import "./TranscriptPane.css";

function TranscriptPane({ closeTranscript }) {
  return (
    <div className="ttpane">
      <div className="ttCloseBtnBg"></div>
      <div className="ttCloseBtn" onClick={closeTranscript}>
        X
      </div>
      <div className="transcript">
        <p>Lorem</p>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  closeTranscript: closeTranscript,
};
export default connect(null, mapDispatchToProps)(TranscriptPane);
