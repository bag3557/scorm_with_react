import React from "react";
import "./PlayerButtons.css";

function PlayerButtons({ toggleTranscript, enablePlayer }) {
  return (
    <div className="footer">
      <ul>
        <div align="center">
          <li className={enablePlayer ? "menuBtn" : "menuBtnDisabled"}></li>
          <li
            className={enablePlayer ? "ttBtn" : "ttBtnDisabled"}
            onClick={toggleTranscript}
          ></li>
          <li className={enablePlayer ? "audioBtn" : "audioBtnDisabled"}></li>
          <div className="volumeSlider"></div>
          <li className={enablePlayer ? "replayBtn" : "replayBtnDisabled"}></li>
          <li className={enablePlayer ? "pauseBtn" : "pauseBtnDisabled"}></li>
          <li className={enablePlayer ? "backBtn" : "backBtnDisabled"}></li>
          <div className="pagecounter">
            <div className="currentPageNum">Page 00/00</div>
          </div>
          <li className={enablePlayer ? "nextBtn" : "nextBtnDisabled"}></li>
        </div>
      </ul>
    </div>
  );
}

export default PlayerButtons;
