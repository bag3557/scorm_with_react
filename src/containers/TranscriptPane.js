import React from "react";
import { connect } from "react-redux";

import { closeTranscript } from "../actions/playerActions";
import {
  ttpane,
  ttCloseBtnBg,
  ttCloseBtn,
  transcript,
  transcriptPara
} from "./TranscriptPaneStyles.js";

function TranscriptPane({ closeTranscript, transcriptText }) {
  return (
    <div style={ttpane}>
      <div style={ttCloseBtnBg}></div>
      <div style={ttCloseBtn} onClick={closeTranscript}>
        X
      </div>
      <div style={transcript}>
        <p style={transcriptPara}>{transcriptText}</p>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  closeTranscript: closeTranscript
};
export default connect(null, mapDispatchToProps)(TranscriptPane);
